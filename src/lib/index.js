/**
 *	Package interface of grunt-check-outdated<br />
 *  All static members of this module are available for 3rd party access.
 *
 *  @module grunt-check-outdated
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
 *  Moduletable
 *  @ignore
 */
const _m = {
  tasks:    require( "./tasks" )
}

/**
 *  Stringtable
 *  @ignore
 */
const _STRINGS = {
  REGISTERMULTITASKCHKOUTDATED:  "registerMultiTaskChkOutdated"
}

/* eslint-disable */
// Module exports:
/**
 *  Register a multitask for check_outdated.
 *
 *  @see    Function [registerMultiTaskChkOutdated]{@link tasks/index.md#.registerMultiTaskChkOutdated}
 *          published by module tasks for a detailed function description.
 *
 *  @function module:grunt-check-outdated.registerMultiTaskChkOutdated
 *  @param  {grunt} grunt
 */
Object.defineProperty( module.exports, _STRINGS.REGISTERMULTITASKCHKOUTDATED, {
       value:    _m.tasks.registerMultiTaskChkOutdated,
       writable: false, enumerable: true, configurable: false });
/* eslint-enable */
