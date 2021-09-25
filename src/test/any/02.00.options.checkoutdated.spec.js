/**
 *  © 2020, slashlib.org.
 */
const expect    = require( "expect.js"   );
const path      = require( "path" );

( async function() {
  const constants = require( "./00.00.constants" );
  const env       = await constants.env;

  describe( "02.00.options.checkoutdated.spec.js - Testing module 'lib/options/checkoutdated.js'", () => {
    const chkoutdt = require( "../../lib/options/checkoutdated" );

    describe( "Testing exports of module 'options/checkoutdated'", () => {
      it( "Function 'getCheckOutdatedPath' should exist", () => {
          expect( chkoutdt.getCheckOutdatedPath ).not.to.be( undefined  );
          expect( chkoutdt.getCheckOutdatedPath ).not.to.be( null       );
          expect( chkoutdt.getCheckOutdatedPath ).to.be.a(   "function" );
      });
      it( "Function 'getOptions' should exist", () => {
          expect( chkoutdt.getOptions     ).not.to.be( undefined  );
          expect( chkoutdt.getOptions     ).not.to.be( null       );
          expect( chkoutdt.getOptions     ).to.be.a(   "function" );
      });
      it( "Function 'getTaskOptions' should exist", () => {
          expect( chkoutdt.getTaskOptions ).not.to.be( undefined  );
          expect( chkoutdt.getTaskOptions ).not.to.be( null       );
          expect( chkoutdt.getTaskOptions ).to.be.a(   "function" );
      });
      it( "Function 'toArgs' should exist", () => {
          expect( chkoutdt.toArgs         ).not.to.be( undefined  );
          expect( chkoutdt.toArgs         ).not.to.be( null       );
          expect( chkoutdt.toArgs         ).to.be.a(   "function" );
      });
    });
    describe( "Testing function 'getCheckOutdatedPath' of module 'options/checkoutdated'", () => {
      it( "should be callable without parameters", () => {
          expect(() => { chkoutdt.getCheckOutdatedPath(); }).not.to.throwException();
      });
      it( "should return a path {string}", () => {
          const value = chkoutdt.getCheckOutdatedPath();
          expect( value ).to.be.a( "string" );
      });
    });
    describe( "Testing function 'getOptions' of module 'options/checkoutdated'", () => {
      it( "should be callable without parameters", () => {
          expect(() => { chkoutdt.getOptions(); }).not.to.throwException();
      });
      describe( "should return a value which", () => {
        const value = chkoutdt.getOptions();
        it( "should be of type object", () => {
            expect( value ).to.be.an( "object" );
        });
      });
    });
    describe( "Testing function 'getTaskOptions' of module 'options/checkoutdated'", () => {
      it( "should not be callable without parameters", () => {
          const errmsg      = "Cannot read property 'options' of undefined";
          // WTF?!?!? Really??? *sigh*
          const errmsg_v_16 = "Cannot read properties of undefined (reading 'options')";
          expect(() => { chkoutdt.getTaskOptions(); }).to.throwException(( error ) => {
            expect( error ).to.be.a( TypeError );
            expect(( error.message === errmsg ) || ( error.message === errmsg_v_16 )).to.be.ok();
          });
      });
      it( "should be callable with parameter 'task' {grunt.task}", () => {
          expect(() => { chkoutdt.getTaskOptions( env.task ); }).not.to.throwException();
      });
      describe( "should return a value which", () => {
        const value = chkoutdt.getTaskOptions( env.task );
        // console.log( env.task.data )
        it( "should be of type object", () => {
            expect( value ).to.be.an( "object" );
        });
        it( "should provide property 'cwd'", () => {
            expect( value.cwd ).not.to.be( undefined );
            expect( value.cwd ).not.to.be( null );
            expect( value.cwd === process.cwd()).to.be.ok();
        });
      });
    });
    describe( "Testing function 'toArgs' of module 'options/checkoutdated'", () => {
      it( "should be callable without parameter 'grunt' {grunt} but get rejected", ( done ) => {
          const errmsg  = "checkoutdated.js - Function 'toArgs': missing parameter 'grunt'.";
          expect(() => { chkoutdt.toArgs()
                              .then(( value ) => { done( new Error( "Should be rejected!" )); },
                                    ( error ) => {
                                      // console.log( error );
                                      expect( error ).to.be.an( Error );
                                      expect( error.message === errmsg ).to.be.ok();
                                      done();
                               })
                              .catch(( error ) => { done( error ); })
                       }).not.to.throwException();
      });
      it( "should be callable without parameter 'task' {task} but get rejected", ( done ) => {
          const errmsg  = "checkoutdated.js - Function 'toArgs': missing parameter 'task'.";
          expect(() => { chkoutdt.toArgs( env.grunt )
                              .then(( value ) => { done( new Error( "Should be rejected!" )); },
                                    ( error ) => {
                                      // console.log( error );
                                      expect( error ).to.be.an( Error );
                                      expect( error.message === errmsg ).to.be.ok();
                                      done();
                               })
                              .catch(( error ) => { done( error ); })
                       }).not.to.throwException();
      });
      it( "should be callable with parameters 'grunt' {grunt}, 'task' {task} and resolve", ( done ) => {
          expect(() => { chkoutdt.toArgs( env.grunt, env.task )
                              .then(( value ) => {
                                      // console.log( value );
                                      expect( value ).to.be.an( "object" );
                                      done();
                               })
                              .catch(( error ) => { done( error ); })
                       }).not.to.throwException();
      });
      /** *******************************************************************************************
       *
       *  Test options...
       *
       */// *****************************************************************************************
      it( "should be callable with parameters 'grunt' {grunt}, 'task' {task}, 'options' {object} and resolve", ( done ) => {
          const options = chkoutdt.getTaskOptions( env.task );
          expect(() => { chkoutdt.toArgs( env.grunt, env.task, options )
                              .then(( value ) => {
                                      // console.log( value );
                                      expect( value ).to.be.an( "object" );
                                      done();
                               })
                              .catch(( error ) => { done( error ); })
                       }).not.to.throwException();
      });
      it( "should be callable with parameters 'grunt' {grunt}, 'task' {task}, 'options' {object} and resolve (options.cwd === `${ process.cwd()} ...`)", ( done ) => {
          const options = chkoutdt.getTaskOptions( env.task );
          expect(() => { chkoutdt.toArgs( env.grunt, env.task, options )
                              .then(( value ) => {
                                      // console.log( value );
                                      expect( value ).to.be.an( "object" );
                                      expect( value.opts.cwd.startsWith( process.cwd())).to.be.ok();
                                      done();
                               })
                              .catch(( error ) => { done( error ); })
                       }).not.to.throwException();
      });
      it( "should be callable with parameters 'grunt' {grunt}, 'task' {task}, 'options' {object} and resolve (options.dryrun === false)", ( done ) => {
          const options = chkoutdt.getTaskOptions( env.task );
          expect(() => { chkoutdt.toArgs( env.grunt, env.task, options )
                              .then(( value ) => {
                                      // console.log( value );
                                      expect( value ).to.be.an( "object" );
                                      expect( value.opts.dryrun === false ).to.be.ok();
                                      done();
                               })
                              .catch(( error ) => { done( error ); })
                       }).not.to.throwException();
      });
      it( "should be callable with parameters 'grunt' {grunt}, 'task' {task}, 'options' {object} and resolve (options.node.exec = '/some/where' )", ( done ) => {
          const arg     = "/some/where";
          const options = chkoutdt.getTaskOptions( env.task );
                options.node.exec = arg;
          expect(() => { chkoutdt.toArgs( env.grunt, env.task, options )
                              .then(( value ) => {
                                      // console.log( value );
                                      expect( value ).to.be.an( "object" );
                                      expect( value.opts.node.exec === arg ).to.be.ok();
                                      done();
                               })
                              .catch(( error ) => { done( error ); })
                       }).not.to.throwException();
      });
      it( "should be callable with parameters 'grunt' {grunt}, 'task' {task}, 'options' {object} and resolve (options.node.options = [ 'fun' ])", ( done ) => {
          const arg     = "fun";
          const options = chkoutdt.getTaskOptions( env.task );
                options.node.options = [ arg ];
          expect(() => { chkoutdt.toArgs( env.grunt, env.task, options )
                              .then(( value ) => {
                                      // console.log( value );
                                      expect( value ).to.be.an( "object" );
                                      expect( value.args.includes( arg )).to.be.ok();
                                      done();
                               })
                              .catch(( error ) => { done( error ); })
                       }).not.to.throwException();
      });
      it( "should be callable with parameters 'grunt' {grunt}, 'task' {task}, 'options' {object} and resolve (options.checkoutdated.exec = '/some/path')", ( done ) => {
          const arg     = "/some/path/to/check-outdated";
          const options = chkoutdt.getTaskOptions( env.task );
                options.checkoutdated.exec = arg;
          expect(() => { chkoutdt.toArgs( env.grunt, env.task, options )
                              .then(( value ) => {
                                      // console.log( value );
                                      expect( value ).to.be.an( "object" );
                                      expect( value.opts.checkoutdated.exec === arg ).to.be.ok();
                                      expect( value.args.includes( arg )).to.be.ok();
                                      done();
                               })
                              .catch(( error ) => { done( error ); })
                       }).not.to.throwException();
      });
      it( "should be callable with parameters 'grunt' {grunt}, 'task' {task}, 'options' {object} and resolve (options.checkoutdated.ignore.prereleases = true)", ( done ) => {
          const options = chkoutdt.getTaskOptions( env.task );
                options.checkoutdated.ignore.prereleases = true;
          expect(() => { chkoutdt.toArgs( env.grunt, env.task, options )
                              .then(( value ) => {
                                      // console.log( value );
                                      expect( value ).to.be.an( "object" );
                                      expect( value.args.includes( "--ignore-pre-releases" )).to.be.ok();
                                      done();
                               })
                              .catch(( error ) => { done( error ); })
                       }).not.to.throwException();
      });
      it( "should be callable with parameters 'grunt' {grunt}, 'task' {task}, 'options' {object} and resolve (options.checkoutdated.ignore.devdependencies  = true)", ( done ) => {
          const options = chkoutdt.getTaskOptions( env.task );
                options.checkoutdated.ignore.devdependencies  = true;
          expect(() => { chkoutdt.toArgs( env.grunt, env.task, options )
                              .then(( value ) => {
                                      // console.log( value );
                                      expect( value ).to.be.an( "object" );
                                      expect( value.args.includes( "--ignore-dev-dependencies" )).to.be.ok();
                                      done();
                               })
                              .catch(( error ) => { done( error ); })
                       }).not.to.throwException();
      });
      it( "should be callable with parameters 'grunt' {grunt}, 'task' {task}, 'options' {object} and resolve (options.checkoutdated.ignore.packages = [ ])", ( done ) => {
          const arg     = [ ];
          const options = chkoutdt.getTaskOptions( env.task );
                options.checkoutdated.ignore.packages = arg;
          expect(() => { chkoutdt.toArgs( env.grunt, env.task, options )
                                 .then(( value ) => {
                                         // console.log( value );
                                         expect( value ).to.be.an( "object" );
                                         expect( value.opts.checkoutdated.ignore.packages === arg ).to.be.ok();
                                         expect( value.args.includes( "--ignore-packages" )).not.to.be.ok();
                                         done();
                                  })
                                 .catch(( error ) => { done( error ); })
                       }).not.to.throwException();
      });
      it( "should be callable with parameters 'grunt' {grunt}, 'task' {task}, 'options' {object} and resolve (options.checkoutdated.ignore.packages = [ 'some-package' ])", ( done ) => {
          const pkg     = "some-package";
          const arg     = [ pkg ];
          const options = chkoutdt.getTaskOptions( env.task );
                options.checkoutdated.ignore.packages = arg;
          expect(() => { chkoutdt.toArgs( env.grunt, env.task, options )
                              .then(( value ) => {
                                      // console.log( value );
                                      expect( value ).to.be.an( "object" );
                                      expect( value.opts.checkoutdated.ignore.packages === arg ).to.be.ok();
                                      expect( value.args.includes( pkg )).to.be.ok();
                                      expect( value.args.includes( "--ignore-packages" )).to.be.ok();
                                      done();
                               })
                              .catch(( error ) => { done( error ); })
                       }).not.to.throwException();
      });
      it( "should be callable with parameters 'grunt' {grunt}, 'task' {task}, 'options' {object} and resolve (options.checkoutdated.ignore.packages = 'fun')", ( done ) => {
          const arg     = "fun";
          const options = chkoutdt.getTaskOptions( env.task );
                options.checkoutdated.ignore.packages = arg;
          expect(() => { chkoutdt.toArgs( env.grunt, env.task, options )
                              .then(( value ) => {
                                      // console.log( value );
                                      expect( value ).to.be.an( "object" );
                                      expect( value.opts.checkoutdated.ignore.packages === arg ).to.be.ok();
                                      expect( value.args.includes( "--ignore-packages" )).not.to.be.ok();
                                      done();
                               })
                              .catch(( error ) => { done( error ); })
                       }).not.to.throwException();
      });
      it( "should be callable with parameters 'grunt' {grunt}, 'task' {task}, 'options' {object} and resolve (options.checkoutdated.ignore = undefined)", ( done ) => {
          const options = chkoutdt.getTaskOptions( env.task );
                options.checkoutdated.ignore = undefined;
          expect(() => { chkoutdt.toArgs( env.grunt, env.task, options )
                              .then(( value ) => {
                                      // console.log( value );
                                      expect( value ).to.be.an( "object" );
                                      expect( value.opts.checkoutdated.ignore === undefined ).to.be.ok();
                                      done();
                               })
                              .catch(( error ) => { done( error ); })
                       }).not.to.throwException();
      });
      it( "should be callable with parameters 'grunt' {grunt}, 'task' {task}, 'options' {object} and resolve (options.checkoutdated.columns = [ 'example' ])", ( done ) => {
          const arg     = "example";
          const columns = [ arg ];
          const options = chkoutdt.getTaskOptions( env.task );
                options.checkoutdated.columns  = columns;
          expect(() => { chkoutdt.toArgs( env.grunt, env.task, options )
                              .then(( value ) => {
                                      // console.log( value );
                                      expect( value ).to.be.an( "object" );
                                      expect( value.opts.checkoutdated.columns === columns ).to.be.ok();
                                      expect( value.args.includes( "--columns" )).to.be.ok();
                                      expect( value.args.includes( arg )).to.be.ok();
                                      done();
                               })
                              .catch(( error ) => { done( error ); })
                       }).not.to.throwException();
      });
      it( "should be callable with parameters 'grunt' {grunt}, 'task' {task}, 'options' {object} and resolve (options.checkoutdated.columns = undefined)", ( done ) => {
          const options = chkoutdt.getTaskOptions( env.task );
                options.checkoutdated.columns  = undefined;
          expect(() => { chkoutdt.toArgs( env.grunt, env.task, options )
                              .then(( value ) => {
                                      // console.log( value );
                                      expect( value ).to.be.an( "object" );
                                      expect( value.opts.checkoutdated.columns === undefined ).to.be.ok();
                                      expect( value.args.includes( "--columns" )).not.to.be.ok();
                                      done();
                               })
                              .catch(( error ) => { done( error ); })
                       }).not.to.throwException();
      });
      it( "should be callable with parameters 'grunt' {grunt}, 'task' {task}, 'options' {object} and resolve (options.checkoutdated.depth = 5)", ( done ) => {
          const arg     = 5;
          const options = chkoutdt.getTaskOptions( env.task );
                options.checkoutdated.depth  = arg;
          expect(() => { chkoutdt.toArgs( env.grunt, env.task, options )
                              .then(( value ) => {
                                      // console.log( value );
                                      expect( value ).to.be.an( "object" );
                                      expect( value.opts.checkoutdated.depth === arg ).to.be.ok();
                                      expect( value.args.includes( "--depth" )).to.be.ok();
                                      expect( value.args.includes( arg )).to.be.ok();
                                      done();
                               })
                              .catch(( error ) => { done( error ); })
                       }).not.to.throwException();
      });
      it( "should be callable with parameters 'grunt' {grunt}, 'task' {task}, 'options' {object} and resolve (options.checkoutdated.global = true)", ( done ) => {
          const options = chkoutdt.getTaskOptions( env.task );
                options.checkoutdated.global  = true;
          expect(() => { chkoutdt.toArgs( env.grunt, env.task, options )
                              .then(( value ) => {
                                      // console.log( value );
                                      expect( value ).to.be.an( "object" );
                                      expect( value.opts.checkoutdated.global === true ).to.be.ok();
                                      expect( value.args.includes( "--global" )).to.be.ok();
                                      done();
                               })
                              .catch(( error ) => { done( error ); })
                       }).not.to.throwException();
      });
      it( "should be callable with parameters 'grunt' {grunt}, 'task' {task}, 'options' {object} and resolve (options.checkoutdated.preferwanted = true)", ( done ) => {
          const options = chkoutdt.getTaskOptions( env.task );
                options.checkoutdated.preferwanted = true;
          expect(() => { chkoutdt.toArgs( env.grunt, env.task, options )
                              .then(( value ) => {
                                      // console.log( value );
                                      expect( value ).to.be.an( "object" );
                                      expect( value.opts.checkoutdated.preferwanted === true ).to.be.ok();
                                      expect( value.args.includes( "--prefer-wanted" )).to.be.ok();
                                      done();
                               })
                              .catch(( error ) => { done( error ); })
                       }).not.to.throwException();
      });
      it( "should be callable with parameters 'grunt' {grunt}, 'task' {task}, 'options' {object} and resolve (options.checkoutdated.opts = [ '---option' ])", ( done ) => {
          const arg     = "--option";
          const arr     = [ arg ];
          const options = chkoutdt.getTaskOptions( env.task );
                options.checkoutdated.opts = arr;
          expect(() => { chkoutdt.toArgs( env.grunt, env.task, options )
                              .then(( value ) => {
                                      // console.log( value );
                                      expect( value ).to.be.an( "object" );
                                      expect( value.opts.checkoutdated.opts === arr ).to.be.ok();
                                      expect( value.args.includes( arg )).to.be.ok();
                                      done();
                               })
                              .catch(( error ) => { done( error ); })
                       }).not.to.throwException();
      });
    });
  });
})();
