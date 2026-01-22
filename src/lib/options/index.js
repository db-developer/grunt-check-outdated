
/**
 *	lib/options/index.js: grunt-check-outdated/options
 *
 *  @module grunt-check-outdated/options
 *
 *//*
 *  © 2021, db-developer.
 *
 *  Distributed  WITHOUT  ANY WARRANTY;  without  even the  implied
 *  warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 */
"use strict";

const checkoutdated = require( "./checkoutdated" );

/**
 *  Converts task-specific options for the `check_outdated` task into
 *  a plain options object used for executing Rollup.
 *
 *  This is a re-export of function [toArgs]{@link chkoutdated.md#.toArgs}
 *  published by module [options/chkoutdated]{@link chkoutdated.md}
 *
 *  @function module:grunt-check-outdated/options.toArgs
 *  @param  {grunt}           grunt
 *  @param  {grunt.task}      task
 *
 *  @return {Promise<Object>} obj
 *  @return {Array<strings>}  obj.args  an array of arguments
 *  @return {Array<any>}      obj.opts  an array of options
 */
module.exports.toArgs = checkoutdated.toArgs;
