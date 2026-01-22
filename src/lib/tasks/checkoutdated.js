/**
 *  tasks/checkoutdated.js: grunt-check-outdated
 *
 *  @module grunt-check-outdated/tasks/checkoutdated
 *
 *//*
 *  © 2021, db-developer.
 *
 *  Distributed  WITHOUT  ANY WARRANTY;  without  even the  implied
 *  warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 */
"use strict";

const constants = require( "../constants" );
const options   = require( "../options/checkoutdated" );

/**
 *  Stringtable initializer
 *  @ignore
 */
function _init_STRINGS() {
  const execute         = "execute";
  const missingproperty = "Missing property";

  return {
    ERROR_MSG_MISSING_PARAM:        `${ execute }: Missing parameter 'obj'.`,
    ERROR_MSG_MISSING_ARGS:         `${ execute }: ${ missingproperty } 'obj.args'.`,
    ERROR_MSG_MISSING_OPTS:         `${ execute }: ${ missingproperty } 'obj.opts'.`,
    ERROR_MSG_MISSING_CWD:          `${ execute }: ${ missingproperty } 'options.cwd'.`,
    ERROR_MSG_MISSING_NODEEXEC:     `${ execute }: ${ missingproperty } 'options.node.exec'.`,
    IGNORE:                         "ignore",
    INHERIT:                        "inherit"
  };
}

/**
 *  Stringtable
 *  @ignore
 */
const _STRINGS = _init_STRINGS();

/**
 * Promisified adapter for `grunt.util.spawn`.
 *
 * Wraps the callback-based `grunt.util.spawn` API into a Promise so it can be
 * consumed via async/await without mixing callback and business logic.
 * The Promise resolves with the spawn result or rejects with the execution error.
 *
 * @param {grunt} grunt
 *        The Grunt runtime instance providing `grunt.util.spawn`.
 * @param {Object} config
 *        Spawn configuration passed through to `grunt.util.spawn`.
 * @param {string} config.cmd
 *        Executable to run.
 * @param {Array<string>} config.args
 *        Command-line arguments passed to the executable.
 * @param {Object} config.opts
 *        Options object forwarded to the spawn call (env, cwd, stdio).
 *
 * @returns {Promise<Object>}
 *          Resolves with the spawn result object provided by Grunt,
 *          or rejects with an Error if the process execution fails.
 */
module.exports.spawnAsync = function spawnAsync(grunt, config) {
  return new Promise((resolve, reject) => {
    grunt.util.spawn(config, (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
}

/**
 *  Return a promise for executing
 *    'node --[node opts] check-outdated --[opts]'
 *
 *  @param  {grunt}       grunt the runtime 'instance' of grunt.
 *  @param  {grunt.task}  task  the current task
 *  @param  {Object}      obj wrapper for options and arguments.
 */
module.exports.execute = async function execute( grunt, task, obj ) {
  if ( ! obj ) {
       throw new Error( _STRINGS.ERROR_MSG_MISSING_PARAM );
  }

  if ( ! obj.args ) {
       throw new Error( _STRINGS.ERROR_MSG_MISSING_ARGS );
  }

  if ( ! obj.opts ) {
       throw new Error( _STRINGS.ERROR_MSG_MISSING_OPTS );
  }

  const args    = obj.args;
  const options = obj.opts;

  if ( ! options.cwd ) {
        throw new Error( _STRINGS.ERROR_MSG_MISSING_CWD );
  }

  if ( ! options.node.exec ) {
        throw new Error( _STRINGS.ERROR_MSG_MISSING_NODEEXEC );
  }

  const env   = { ...process.env };
  const cwd   = options.cwd;
  const stdio = options.quiet ? _STRINGS.IGNORE : _STRINGS.INHERIT;
  const opts  = { env, cwd, stdio };
  const cmd   = options.node.exec;

  const logmsg = `Will execute (stdio: '${ stdio }'): ${ cmd } ${ args.join( " " )}`;
  
  /* istanbul ignore else */
  if ( options.dryrun ) {
        grunt.log.ok( logmsg );
        return obj;
  }
  else grunt.verbose.ok( logmsg );

  const result = await module.exports.spawnAsync(grunt, { cmd, args, opts });
  obj.result = result;

  return obj;
}

/**
 *  Run the check-outdated task.
 *
 *  @return {Promise} ... required by callee to terminate async call (on "then")
 */
module.exports.runTask = async function runTask( grunt, task ) {
  const obj = await options.toArgs(grunt, task);
  return module.exports.execute(grunt, task, obj);
}

/**
 *  Registers the 'check_outdated' multitask.
 * 
 *  Note:
 *  - Any errors thrown in lower-level functions (e.g., `execute`, `toArgs`, `spawnAsync`)
 *    will automatically reject the returned Promise.
 *  - Rejected Promises are handled by logging the error and calling `done(false)` to fail
 *    the task.* 
 *
 *  @param  {grunt} grunt
 */
module.exports.registerMultiTask = function registerMultiTask( grunt ) {
  grunt.registerMultiTask( constants.TASKNAME, constants.TASKDESCRIPTION,
    /* istanbul ignore next */ function () {
      const task = this;
      const done = task.async();
      module.exports.runTask( grunt, task )
            .then((       ) => { done(); },
                  ( error ) => { grunt.log.error( error ); done( false ); });
  });
}
