/**
 *	options/checkoutdated.js: grunt-check-outdated
 *
 *  @module grunt-check-outdated/options/checkoutdated
 *
 *//*
 *  © 2021, db-developer.
 *
 *  Distributed  WITHOUT  ANY WARRANTY;  without  even the  implied
 *  warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 */
"use strict";

/**
 *  Stringtable initializer
 *  @ignore
 */
function _init_STRINGS() {
  const errormsg  = `checkoutdated.js - Function 'toArgs': missing parameter`;

  return {
    COLUMN_CURRENT:                   "current",
    COLUMN_LATEST:                    "latest",
    COLUMN_NAME:                      "name",
    COLUMN_WANTED:                    "wanted",
    ERROR_MSG_MISSING_GRUNT:          `${ errormsg } 'grunt'.`,
    ERROR_MSG_MISSING_OPTIONS:        `${ errormsg } 'options'.`,
    ERROR_MSG_MISSING_TASK:           `${ errormsg } 'task'.`,
    ERROR_PEER_DEPENDENCY:            "peer dependency missing. Please run: \"npm install check-outdated\"",
    FALSE:                            `${ false }`,
    OPTIONS_COLUMNS:                  "--columns",
    OPTIONS_DEPTH:                    "--depth",
    OPTIONS_GLOBAL:                   "--global",
    OPTIONS_IGNORE_DEV_DEPENDENCIES:  "--ignore-dev-dependencies",
    OPTIONS_IGNORE_PACKAGES:          "--ignore-packages",
    OPTIONS_IGNORE_PRE_RELEASES:      "--ignore-pre-releases",
    OPTIONS_PREFERWANTED:             "--prefer-wanted",
    PATH_CHECK_OUTDATED:              "check-outdated/check-outdated.js",
    TRUE:                             `${ true }`
  };
}

/**
 *  Stringtable
 *  @ignore
 */
const _STRINGS = _init_STRINGS();

/**
 *  Returns the path to the check-outdated
 *
 *  @param  {grunt}   grunt
 *  @return {string}  path to check-outdated
 */
module.exports.getCheckOutdatedPath = function getCheckOutdatedPath( grunt ) {
  /* eslint-disable no-unused-vars *//* unused: catch error */
  try { return require.resolve( _STRINGS.PATH_CHECK_OUTDATED ); }
  catch(error) { /* istanbul ignore next */ grunt.fail.fatal( _STRINGS.ERROR_PEER_DEPENDENCY ); }
}

/**
 *  Returns default settings for basic check-outdated options.
 *
 *  @return {object} default settings for basic check-outdated options.
 */
module.exports.getChkOutdatedOptions = function getChkOutdatedOptions() {
  return {
    columns:      [
                    _STRINGS.COLUMN_NAME,
                    _STRINGS.COLUMN_CURRENT,
                    _STRINGS.COLUMN_WANTED,
                    _STRINGS.COLUMN_LATEST
                  ],
    depth:        false,
    global:       false,
    preferwanted: false
  };
}

/**
 *  Returns default settings for basic check-outdated ignore options.
 *
 *  @return {object} default settings for basic check-outdated ignore options.
 */
module.exports.getChkOutdatedIgnoreOptions = function getChkOutdatedIgnoreOptions() {
  return {
    prereleases:      false,
    devdependencies:  false,
    packages:         [ ]
  };
}

/**
 *  Defines and returns the set of options that is passed to task 'check_outdated'.
 *
 *  @return {Object}  check_outdated default options
 */
module.exports.getOptions = function getOptions() {
  return {
    cwd:              process.cwd(),    // working directory for check-outdated run
    dryrun:           false             // dry run - do nothing just print cmd line
  };
}

/**
 *  Returns grunt task specific options for 'check_outdated'.
 *
 *  Note:
 *  - Default options and configuration options have already been merged.
 *  - Array-valued options (notably `checkoutdated.columns`) are treated as
 *    *explicit overrides*:
 *      If the user specifies an array in the task configuration, it fully
 *      replaces the corresponding default array.
 *  - This behavior is intentional and allows users to precisely control
 *    which columns are emitted, without implicit completion or merging.
 *
 *  @param  {grunt.task}  task
 *
 *  @return {Object}  'check_outdated' options for grunt task
 */
module.exports.getTaskOptions = function getTaskOptions( task ) {
  const  taskopts     = structuredClone( task.options());
  const  chkoutdated  = Object.assign( module.exports.getChkOutdatedOptions(),
                                       /* istanbul ignore next */
                                       taskopts.checkoutdated || {});
  const  chkignore    = Object.assign( module.exports.getChkOutdatedIgnoreOptions(),
                                       /* istanbul ignore next */
                                       taskopts.checkoutdated.ignore || {});

  const  options      = Object.assign( module.exports.getOptions(), taskopts );
         options.node = { };
         options.checkoutdated = chkoutdated;
         options.checkoutdated.ignore = chkignore;
  return options;
}

/**
 *  Converts grunt task specific options for 'check_outdated' to an array
 *  of arguments for the check-outdated CLI.
 *
 *  Note:
 *  - All values under `options.checkoutdated` (columns, depth, global, preferwanted, ignore, opts)
 *    are passed **as-is** to the third-party tool `checkoutdated`.
 *  - No validation of these values is performed here, because:
 *      1. Validating columns or other flags would require keeping in sync with
 *         `checkoutdated` versions, which is impractical.
 *      2. The third-party tool is responsible for handling invalid inputs.
 *  - Responsibility of `toArgs` is only to consistently transform the merged task options
 *    into CLI arguments for the spawn call.
 *
 *  @param {grunt} grunt
 *  @param {grunt.task} task
 *  @param {Object} [options] optional pre-merged task options
 *  @return {Promise<Object>} resolves with `{ args, opts }`
 */
module.exports.toArgs = async function toArgs( grunt, task, options ) {
  if (( grunt === null ) || ( grunt === undefined )) {
        throw new Error( _STRINGS.ERROR_MSG_MISSING_GRUNT );
  }

  if (( task === null ) || ( task === undefined )) {
        throw new Error( _STRINGS.ERROR_MSG_MISSING_TASK );
  }

  options = options ?? module.exports.getTaskOptions( task );
  /* istanbul ignore if *//* Code is expected to never be reached */
  if (( options === null ) || ( options === undefined )) {
        throw new Error( _STRINGS.ERROR_MSG_MISSING_OPTIONS );
  }

  const args    = [ ];
  const retval  = { args, opts: options };

  /*
    *  node execution path
    */
  if ( ! options.node.exec ) {
        options.node.exec = process.execPath;
  }

  /*
    *  node options (if any)
    */
  if (( options.node.options ) &&
      ( Array.isArray( options.node.options ))) {
        options.node.options.forEach(( option ) => {
          args.push( option );
        });
  }

  /*
    *  check-outdated:  Set path to check-outdated
    */
  if ( ! options.checkoutdated.exec ) {
        options.checkoutdated.exec = module.exports.getCheckOutdatedPath();
  }
  args.push( options.checkoutdated.exec );

  /*
    *  check-outdated:  set flags for ignores
    */
  if ( options.checkoutdated.ignore ) {
        if ( options.checkoutdated.ignore.prereleases === true ) {
            args.push( _STRINGS.OPTIONS_IGNORE_PRE_RELEASES );
        }
        if ( options.checkoutdated.ignore.devdependencies === true ) {
            args.push( _STRINGS.OPTIONS_IGNORE_DEV_DEPENDENCIES );
        }
        if (( options.checkoutdated.ignore.packages ) &&
            (( Array.isArray( options.checkoutdated.ignore.packages ) &&
            ( options.checkoutdated.ignore.packages.length > 0 )))) {
              const s = options.checkoutdated.ignore.packages.join( "," );
              args.push( _STRINGS.OPTIONS_IGNORE_PACKAGES, s );
        }
  }

  /*
    *  check-outdated: columns and position
    */
  if (( options.checkoutdated.columns ) &&
      ( Array.isArray( options.checkoutdated.columns ))) {
        const s = options.checkoutdated.columns.join( "," );
        args.push( _STRINGS.OPTIONS_COLUMNS, s );
  }

  /*
    *  check-outdated:  depth
    */
  if ( options.checkoutdated.depth ) {
        args.push( _STRINGS.OPTIONS_DEPTH, options.checkoutdated.depth );
  }

  /*
    *  check-outdated:  global
    */
  if ( options.checkoutdated.global === true ) {
        args.push( _STRINGS.OPTIONS_GLOBAL );
  }


  /*
    *  check-outdated:  preferwanted
    */
  if ( options.checkoutdated.preferwanted === true ) {
        args.push( _STRINGS.OPTIONS_PREFERWANTED );
  }

  /*
    *  check-outdated:  Set additional options
    *                   This is an array where developers can pass options,
    *                   which are not covered by grunt-check-outdated.
    */
  if (( options.checkoutdated.opts ) &&
      ( Array.isArray( options.checkoutdated.opts ))) {
        options.checkoutdated.opts.forEach(( option ) => {
          args.push( option );
        });
  }

  return retval;
}
