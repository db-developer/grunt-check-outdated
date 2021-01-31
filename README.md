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

## getting started ##

This guide assumes, that you are familiar with the use of
[npm](https://npmjs.com "Homepage of npm") and
[grunt](https://gruntjs.com "Homepage of grunt").  
The plugin can be installed by the following command:

<code>npm install grunt-check-outdated --save-dev</code>

Once installed, the plugin may be loaded from within your gruntfile:

<code>grunt.loadNpmTasks( "npm-outdateds" );</code>

Setup the task configuration as described below (see usage) and run the task:

<code>grunt npm-outdated</code>

Of cause, the task can be integrated into any complex build process.

## usage ##

documentation to be completed.
Currently this plugin supports all commandline options of
[check-outdated](https://www.npmjs.com/package/check-outdated)

Use grunt "options" to pass options to
[check-outdated](https://www.npmjs.com/package/check-outdated).
Do not use camel case (Don't ask - I simply fricking hate that :-))
