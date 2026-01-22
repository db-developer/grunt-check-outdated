/**
 *	tasks/index.js: grunt-check-outdated/tasks
 *
 *  @module grunt-check-outdated/tasks
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
 *  Registers the `check_outdated` multitask with Grunt.
 *
 *  This function is the main entry point to integrate `grunt-call-rollup`
 *  into a Gruntfile. Internally, it forwards to
 *  [chkoutdated.registerMultiTask]{@link ./chkoutdated.md#.registerMultiTask}.
 *
 *  @function module:grunt-check-outdated/tasks.registerMultiTask
 *  @param  {grunt} grunt - The Grunt runtime instance.
 */
module.exports.registerMultiTask = checkoutdated.registerMultiTask