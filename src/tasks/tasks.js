/**
 *  © 2021, db-developer.
 *  Licensed under the MIT license.
 */
"use strict";

const lib = require( "../lib" );

module.exports = function( grunt ) {
  lib.registerMultiTaskChkOutdated( grunt );
};
