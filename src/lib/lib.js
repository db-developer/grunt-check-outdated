/**
 *	lib.js: grunt-check-outdated
 *
 *  @module grunt-check-outdated/lib
 *
 *//*
 *	lib.js: grunt-check-outdated
 *
 *  © 2021, slashlib.org.
 *
 *  lib.js  is distributed WITHOUT ANY WARRANTY; without even the implied
 *  warranty of  MERCHANTABILITY or  FITNESS  FOR  A PARTICULAR  PURPOSE.
 *
 *//* eslint-disable-next-line */
"use strict";

/**
 *  Stringtable
 *  @ignore
 */
const _STRINGS = {
  ERROR_PEER_DEPENDENCY:    "check-outdated peer dependency missing.  Please \"npm install check-outdated\"",
  GETCHECKOUTDATEDPATH:     "getCheckOutdatedPath",
  ISARRAY:                  "isArray",
  MSG_SKIPPING_ARRAY:       "Skipping empty <name> array",
  MSG_ARRAY_EXPECTED:       "<name> must be an array of strings",
  PATH_CHECK_OUTDATED:      "check-outdated/check-outdated.js",
  TAG_NAME:                 "<name>"
};

/**
 *  Returns the path to the check-outdated
 *
 *  @param  {grunt}   grunt
 *  @return {string}  path to check-outdated
 */
function getCheckOutdatedPath( grunt ) {
  try { return require.resolve( _STRINGS.PATH_CHECK_OUTDATED ); }
  catch( error ) { /* istanbul ignore next */ grunt.fail.fatal( _STRINGS.ERROR_PEER_DEPENDENCY ); }
}

/**
 *  Checks if options is of type array and passes it to callback.
 *
 *  @param  {grunt}     grunt
 *  @param  {Array}     options
 *  @param  {string}    name
 *  @param  {Function}  callback
 */
function isArray( grunt, options, name, callback ) {
  if ( Array.isArray( options )) {
       if (( options.length ) && ( callback )) { callback( options ); }
       else grunt.verbose.ok( _STRINGS.MSG_SKIPPING_ARRAY.replace( _STRINGS.TAG_NAME, name ));
  }
  else throw new Error( _STRINGS.MSG_ARRAY_EXPECTED.replace( _STRINGS.TAG_NAME, name ));
}

/* eslint-disable */
// Module exports:
Object.defineProperty( module.exports, _STRINGS.GETCHECKOUTDATEDPATH, {
       value:    getCheckOutdatedPath,
       writable: false, enumerable: true, configurable: false });
Object.defineProperty( module.exports, _STRINGS.ISARRAY,          {
       value:    isArray,
       writable: false, enumerable: true, configurable: false });
/* eslint-enable */
