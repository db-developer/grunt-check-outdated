# grunt-check-outdated

check for outdated dependencies  

[![npm version](https://img.shields.io/npm/v/grunt-check-outdated?color=blue)](https://www.npmjs.com/package/grunt-check-outdated)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![jsdoc](https://img.shields.io/static/v1?label=jsdoc&message=%20api%20&color=blue)](https://jsdoc.app/)
[![Built with Grunt](https://cdn.gruntjs.com/builtwith.svg)](https://gruntjs.com/)
[![codecov](https://codecov.io/gh/db-developer/grunt-check-outdated/branch/master/graph/badge.svg)](https://codecov.io/gh/db-developer/grunt-check-outdated)
[![Build Status](https://travis-ci.com/db-developer/grunt-check-outdated.svg?branch=master)](https://travis-ci.com/db-developer/grunt-check-outdated)
[![dependencies](https://david-dm.org/db-developer/grunt-check-outdated.svg)](https://david-dm.org/)

This plugin is a grunt wrapper for [check-outdated](https://www.npmjs.com/package/check-outdated)

## content ##

* Usage (see further down this page)
  * [Getting started guide](#getting-started)
  * [Usage and examples](#usage)

* Developers
  * [Testing grunt-check-outdated](docs/grunt.md#testing)
  * [Code coverage of tests for grunt-check-outdated](docs/grunt.md#code-coverage)
  * [Build grunt-check-outdated from scratch](docs/grunt.md#building)
  * [NPM integration of grunt-check-outdated](docs/grunt.md#npm_integration)
  * [Frameworks used for testing, building, etc.](docs/frameworks.md)
  * [API of package grunt-check-outdated](docs/api.index.md)

[Changelog](docs/changelog.md)

## getting started ##

This guide assumes, that you are familiar with the use of
[npm](https://npmjs.com "Homepage of npm") and
[grunt](https://gruntjs.com "Homepage of grunt").  
The plugin can be installed by the following command:

<code>npm install grunt-check-outdated --save-dev</code>

Once installed, the plugin may be loaded from within your gruntfile:

<code>grunt.loadNpmTasks( "grunt-check-outdated" );</code>

Setup the task configuration as described below (see usage) and run the task:

<code>grunt check_outdated</code>

Of cause, the task can be integrated into any complex build process.

## usage ##

The following examples assume that the grunt plugin 'load-grunt-config' is used.
Alternatively, the code can of course be integrated into the 'gruntfile.js' file.  

For a better understanding of 'checkoutdated' options, pls. visit
[check-outdated](https://www.npmjs.com/package/check-outdated)  

Options hidden by a comment show default values.

```javascript
// file check_outdated.js
module.exports = function ( grunt, options ) {
  return {
    always: {                                   // this is a grunt multitask, so define a target.
      options: {
        // cwd:           process.cwd(),        // set a working directory - defaults to process.cwd()
        // dryrun:        false,                // dry run - do nothing just print out the cmd line
        // quiet          false,                // ... shut up! (no good idea if task fails)
        /* node: {                              // node options
          exec:           {string},             // set your node executable - defaults to: process.execPath
          opts:           {Array<string>}       // array of node options
        }, */
        checkoutdated: {                        // mirrors options of [check-outdated](https://www.npmjs.com/package/check-outdated)
          ignore: {
            // prereleases:     false,          // --ignore-pre-releases
                                                //   Don't recommend to update to the latest version, if it contains a hyphen
            // devdependencies: false,          // --ignore-dev-dependencies
                                                //   Do not warn if devDependencies are outdated.
            packages:           [ "webpack" ]   // --ignore-packages
          },                                    //   Ignore the listed packages, even if they are outdated.
          columns:              [               // --columns
                                  "name" ,      //   Defines which columns should be shown in which order.
                                  "current",    //   [Available columns](https://www.npmjs.com/package/check-outdated#available-columns)
                                  "wanted",
                                  "latest"
                                ],
          // opts:              {Array<string>} //  grunt-plugin specific: In case check-outdated is newer than
                                                //  grunt-check-outdated, you may manually add new options to this
                                                //  array. The arrays contents are appended to the end of the call,
                                                //  created by this plugin (which can be verified using --dryrun)
          // depth:             false,          //  --depth <n> Max depth for checking dependency tree
          // global:            false           //  --global Check packages in the global install prefix
        }
      }
    }
  };
};
```
