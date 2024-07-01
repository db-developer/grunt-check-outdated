
/**
 *	index.js: grunt-check-outdated/options
 *
 *  @module grunt-check-outdated/options
 *
 *//*
 *  © 2021, slashlib.org.
 *
 *  index.js  is distributed WITHOUT ANY WARRANTY; without even the implied
 *  warranty  of  MERCHANTABILITY  or  FITNESS  FOR  A PARTICULAR  PURPOSE.
 *
 */
"use strict";

/**
 *  Module initializer
 *  @ignore
 */
const _m = {
  checkoutdated:      require( "./checkoutdated" )
};

/**
 *  Stringtable
 *  @ignore
 */
const _STRINGS = {
  TOCHKOUTDATEDARGS:  "toChkOutdatedArgs"
};

// Module exports:
/**
 *  Register a multitask for check_outdated.
 *
 *  @see    Function [toArgs]{@link chkoutdated.md#.toArgs}
 *          published by module chkoutdated for a detailed function description.
 *
 *  @function module:grunt-check-outdated/options.toArgs
 *  @param  {grunt}           grunt
 *  @param  {grunt.task}      task
 *
 *  @return {Promise<Object>} obj
 *  @return {Array<strings>}  obj.args  an array of arguments
 *  @return {Array<any>}      obj.opts  an array of options
 */
Object.defineProperty( module.exports, _STRINGS.TOCHKOUTDATEDARGS, {
  value:    _m.checkoutdated.toArgs,
  writable: false, enumerable: true, configurable: false });
