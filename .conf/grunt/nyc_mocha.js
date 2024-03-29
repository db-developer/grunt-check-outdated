/**
 *  © 2020, db-developer.
 *  Licensed under the MIT license.
 */

// Note: This is used for running tests only!
module.exports = function ( grunt, options ) {
  return {
    test_and_coverage: {
      src: `./src/test/**/*.spec.js`,                 // test suite to run...
      options: {
        nyc: {
          coverage: {                                 // report nyc coverage results
            dir:          "dist/coverage",            // ... to folder
            reporter:     [                           // ... using reporters
                            "html", "json", "lcov",
                            "text-summary"
                          ],
            check:        true,
            perfile:      true,
            branches:     100,
            functions:    100,
            lines:        100,
            statements:   100
          },
          excludes:       [ ".conf/**/*.js", "src/test/**/*.js" ],
          requires:       [ "grunt-nyc-mocha/scripts/sourcemapsupport" ]
        },
        mocha: {
          color:          true                        // force colored output
        }
      }
    }
  }
};
