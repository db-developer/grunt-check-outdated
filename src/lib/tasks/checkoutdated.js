/**
 *	tasks/checkoutdated.js: grunt-check-outdated
 *
 *  @module grunt-check-outdated/tasks/checkoutdated
 *
 *//*
 *  © 2021, slashlib.org.
 *
 *  tasks/checkoutdated.js  is distributed WITHOUT ANY WARRANTY; without even the
 *  implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 *
 *//* eslint-disable-next-line */
"use strict";

/**
 *  Module initializer
 *  @ignore
 */
const _m = {
  const:              require( "../constants" ),
  checkoutdatedopts:  require( "../options/checkoutdated" )
};

/**
 *  Stringtable initializer
 *  @ignore
 */
function _init_STRINGS() {
  const executecheckoutdated  = "executeChkOutdated";
  const missingproperty       = "Missing property";

  return {
    ERROR_MSG_MISSING_ARGS:         `${ executecheckoutdated }: ${ missingproperty } 'obj.args'.`,
    ERROR_MSG_MISSING_OPTS:         `${ executecheckoutdated }: ${ missingproperty } 'obj.opts'.`,
    ERROR_MSG_MISSING_CWD:          `${ executecheckoutdated }: ${ missingproperty } 'options.cwd'.`,
    ERROR_MSG_MISSING_NODEEXEC:     `${ executecheckoutdated }: ${ missingproperty } 'options.node.exec'.`,
    EXECUTECHKOUTDATED:             `${ executecheckoutdated }`,
    IGNORE:                         "ignore",
    INHERIT:                        "inherit",
    REGISTERMULTITASKCHKOUTDATED:   "registerMultiTaskChkOutdated",
    RUNTASKCHKOUTDATED:             "runTaskChkOutdated"
  };
}

/**
 *  Stringtable
 *  @ignore
 */
const _STRINGS = _init_STRINGS();

/**
 *  Return a promise for executing
 *    'node --[node opts] check-outdated --[opts]'
 *
 *  @param  {grunt}       grunt the runtime 'instance' of grunt.
 *  @param  {grunt.task}  task  the current task
 *  @param  {Object}      obj wrapper for options and arguments.
 */
function executeChkOutdated( grunt, task, obj ) {
  return new Promise(( resolve, reject ) => {
    try {
      let args = undefined;
      if (( ! obj ) || ( ! obj.args )) {
            throw new Error( _STRINGS.ERROR_MSG_MISSING_ARGS );
      }
      else args = obj.args;

      let options = undefined;
      if (( ! obj ) || ( ! obj.opts )) {
            throw new Error( _STRINGS.ERROR_MSG_MISSING_OPTS );
      }
      else  options = obj.opts;

      const env = process.env;

      let   cwd = undefined;
      if ( ! options.cwd ) {
           throw new Error( _STRINGS.ERROR_MSG_MISSING_CWD );
      }
      else cwd = options.cwd;

      let   stdio = options.quiet ? _STRINGS.IGNORE : _STRINGS.INHERIT;
      const opts  = { env, cwd, stdio };

      let   cmd = undefined;
      if ( ! options.node.exec ) {
           throw new Error( _STRINGS.ERROR_MSG_MISSING_NODEEXEC );
      }
      else cmd = options.node.exec;

      const logmsg = `Will execute (stdio: '${ stdio }'): ${ cmd } ${ args.join( " " )}`;
      /* istanbul ignore else */
      if ( options.dryrun ) {
           grunt.log.ok( logmsg );
           return resolve( obj );
      }
      else grunt.verbose.ok( logmsg );

      /* istanbul ignore next */
      grunt.util.spawn({ cmd, args, opts }, ( error, result ) => {
        if ( ! error ) {
             obj.result = result;
             resolve( obj );
        }
        else reject( error );
      });
    }
    catch( error ) { reject( error ); }
  });
}

/**
 *  Run the check-outdated task.
 *
 *  @return {Promise} ... required by callee to terminate async call (on "then")
 */
function runTaskChkOutdated( grunt, task ) {
  let    promise = _m.checkoutdatedopts.toArgs( grunt, task ); // prepare args for test runs ...
         promise = promise.then(( obj ) => { // run the tests...
                     return executeChkOutdated( grunt, task, obj );
                   });
  return promise;
}

/**
 *  Registers the 'check_outdated' multitask.
 *
 *  @param  {grunt} grunt
 */
function registerMultiTaskChkOutdated( grunt ) {
  grunt.registerMultiTask( _m.const.TASKNAME_NYCMOCHA, _m.const.TASKDESCRIPTION_NYCMOCHA,
    /* istanbul ignore next */ function () {
      const task = this;
      const done = task.async();
      runTaskChkOutdated( grunt, task ).then((       ) => { done(); },
                                             ( error ) => { grunt.log.error( error ); done( false ); });
  });
}

/* eslint-disable */
// Module exports:
Object.defineProperty( module.exports, _STRINGS.EXECUTECHKOUTDATED,  {
       value:    executeChkOutdated,
       writable: false, enumerable: true, configurable: false });
Object.defineProperty( module.exports, _STRINGS.REGISTERMULTITASKCHKOUTDATED, {
       value:    registerMultiTaskChkOutdated,
       writable: false, enumerable: true, configurable: false });
Object.defineProperty( module.exports, _STRINGS.RUNTASKCHKOUTDATED,  {
       value:    runTaskChkOutdated,
       writable: false, enumerable: true, configurable: false });
/* eslint-enable */
