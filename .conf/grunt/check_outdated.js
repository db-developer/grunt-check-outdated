/**
 *  © 2021, db-developer.
 *  Licensed under the MIT license.
 */

module.exports = function ( grunt, options ) {
  return {
    target1: {
      options: {
        // cwd:           process.cwd(),      // working directory for nyc + mocha run
        // dryrun:        false,              // dry run - do nothing just print cmd line
        // quiet          false,
        /* node: {
          exec:           false,              // defaults to: process.execPath
          opts:           false               // array of node options
        }, */
        checkoutdated: {
          ignore: {
            prereleases:      false,
            devdependencies:  false,
            packages:         [ "webpack" ]
          },
          columns:            [ "name" , "current", "wanted", "latest" ],
          depth:              false,
          global:             false
        }
      }
    }
  };
};
