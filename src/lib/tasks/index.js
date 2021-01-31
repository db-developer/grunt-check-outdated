/**
 *	index.js: grunt-check-outdated/tasks
 *
 *  @module grunt-check-outdated/tasks
 *
 *//*
 *  © 2021, slashlib.org.
 *
 *  index.js  is distributed WITHOUT ANY WARRANTY; without even the implied
 *  warranty  of  MERCHANTABILITY  or  FITNESS  FOR  A PARTICULAR  PURPOSE.
 *
 *//* eslint-disable-next-line */
"use strict";

/**
 *  Module initializer
 *  @ignore
 */
const _m = {
  checkoutdated:     require( "./checkoutdated" )
};

/**
 *  Stringtable
 *  @ignore
 */
const _STRINGS = {
  REGISTERMULTITASKCHKOUTDATED:  "registerMultiTaskChkOutdated",
  RUNTASKCHKOUTDATED:            "runTaskChkOutdated"
};

/* eslint-disable */
// Module exports:
/**
 *  Register a multitask for check_outdated.
 *
 *  @see    Function [registerMultiTaskChkOutdated]{@link chkoutdated.md#.registerMultiTaskChkOutdated}
 *          published by module chkoutdated for a detailed function description.
 *
 *  @function module:grunt-check-outdated/tasks.registerMultiTaskChkOutdated
 *  @param  {grunt} grunt
 */
Object.defineProperty( module.exports, _STRINGS.REGISTERMULTITASKCHKOUTDATED, {
       value:    _m.checkoutdated.registerMultiTaskChkOutdated,
       writable: false, enumerable: true, configurable: false });
Object.defineProperty( module.exports, _STRINGS.RUNTASKCHKOUTDATED,  {
       value:    _m.checkoutdated.runTaskChkOutdated,
       writable: false, enumerable: true, configurable: false });
/* eslint-enable */
