
/**
 *	constants.js: grunt-check-outdated
 *
 *  @module grunt-check-outdated/constants
 *
 *//*
 *  © 2021, db-developer.
 *
 *  constants.js  is distributed  WITHOUT  ANY WARRANTY;  without  even  the
 *  implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 */
"use strict";

/**
 *  Stringtable
 *  @ignore
 */
const _STRINGS = {
  PROPERTY_TASKNAME_CHKOUTDATED:   "TASKNAME_NYCMOCHA",
  PROPERTY_TASKDESC_CHKOUTDATED:   "TASKDESCRIPTION_NYCMOCHA",
  TASKNAME_CHKOUTDATED:            "check_outdated",
  TASKDESCRIPTION_CHKOUTDATED:     "Check package.json for outdated dependencies"
};

/* eslint-disable */
// Module exports:
Object.defineProperty( module.exports, _STRINGS.PROPERTY_TASKNAME_CHKOUTDATED, {
       value:    _STRINGS.TASKNAME_CHKOUTDATED,
       writable: false, enumerable: true, configurable: false });
Object.defineProperty( module.exports, _STRINGS.PROPERTY_TASKDESC_CHKOUTDATED, {
       value:    _STRINGS.TASKDESCRIPTION_CHKOUTDATED,
       writable: false, enumerable: true, configurable: false });
/* eslint-enable */
