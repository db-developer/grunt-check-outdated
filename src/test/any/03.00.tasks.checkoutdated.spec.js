/**
 *  © 2021, slashtasks.org.
 */
const expect    = require( "expect.js"   );

( async function() {
  const constants = require( "./00.00.constants" );
  const env       = await constants.env;

  describe( "03.00.tasks.checkoutdated.spec.js - Testing module 'lib/task/checkoutdated.js'", () => {
    const tasks         = require( "../../lib/tasks/checkoutdated"   );
    const checkoutdated = require( "../../lib/options/checkoutdated" );

    describe( "Testing exports of module 'checkoutdated'", () => {
      it( "Function 'spawnAsync ' should exist", () => {
          expect( tasks.spawnAsync ).not.to.be( undefined  );
          expect( tasks.spawnAsync ).not.to.be( null       );
          expect( tasks.spawnAsync ).to.be.a(   "function" );
      });
      it( "Function 'execute' should exist", () => {
          expect( tasks.execute    ).not.to.be( undefined  );
          expect( tasks.execute    ).not.to.be( null       );
          expect( tasks.execute    ).to.be.a(   "function" );
      });
      it( "Function 'runTask' should exist", () => {
          expect( tasks.runTask    ).not.to.be( undefined  );
          expect( tasks.runTask    ).not.to.be( null       );
          expect( tasks.runTask    ).to.be.a(   "function" );
      });
      it( "Function 'registerMultiTask' should exist", () => {
          expect( tasks.registerMultiTask ).not.to.be( undefined  );
          expect( tasks.registerMultiTask ).not.to.be( null       );
          expect( tasks.registerMultiTask ).to.be.a(   "function" );
      });
    });
    describe( "Testing function 'spawnAsync' of module 'checkoutdated'", () => {
      it( "should reject the promise if grunt.util.spawn returns an error", async () => {
          const config = { cmd: "nonexistent_command_xyz", args: [] };
          expect(() => { tasks.spawnAsync( env.grunt, config )
                              .then(( value ) => { done( new Error( "Should be rejected!" )); },
                                    ( error ) => {
                                      // console.log( error );
                                      expect( error ).to.be.an( Error );
                                      expect( error.message === errmsg ).to.be.ok();
                                      done();
                               })
                              .catch(( error ) => { done( error ); });
                       }).not.to.throwException();
      });
    });
    describe( "Testing function 'execute' of module 'checkoutdated'", () => {
      it( "should be callable without parameters but get rejected", ( done ) => {
          const errmsg = "execute: Missing parameter 'obj'.";
          expect(() => { tasks.execute()
                              .then(( value ) => { done( new Error( "Should be rejected!" )); },
                                    ( error ) => {
                                      // console.log( error );
                                      expect( error ).to.be.an( Error );
                                      expect( error.message === errmsg ).to.be.ok();
                                      done();
                               })
                              .catch(( error ) => { done( error ); });
                       }).not.to.throwException();
      });
      it( "should be callable without parameter 'obj' {object} but get rejected", ( done ) => {
          const args    = [ ];
          const errmsg  = "execute: Missing property 'obj.args'.";
          expect(() => { tasks.execute( undefined, undefined, { })
                              .then(( value ) => { done( new Error( "Should be rejected!" )); },
                                    ( error ) => {
                                      // console.log( error );
                                      expect( error ).to.be.an( Error );
                                      expect( error.message === errmsg ).to.be.ok();
                                      done();
                               })
                              .catch(( error ) => { done( error ); });
                       }).not.to.throwException();
      });
      it( "should be callable without parameter 'obj' {object} but get rejected", ( done ) => {
          const args    = [ ];
          const errmsg  = "execute: Missing property 'obj.opts'.";
          expect(() => { tasks.execute( undefined, undefined, { args })
                              .then(( value ) => { done( new Error( "Should be rejected!" )); },
                                    ( error ) => {
                                      // console.log( error );
                                      expect( error ).to.be.an( Error );
                                      expect( error.message === errmsg ).to.be.ok();
                                      done();
                               })
                              .catch(( error ) => { done( error ); });
                       }).not.to.throwException();
      });
      it( "should be callable without parameters 'grunt' {grunt}, 'task' {task} and 'obj' {object} but get rejected (missing options.cwd)", ( done ) => {
          const promise = checkoutdated.toArgs( env.grunt, env.task );
          const errmsg  = "execute: Missing property 'options.cwd'.";
          expect(() => { promise.then(( obj ) => {
                           delete obj.opts.cwd;
                           return tasks.execute( env.grunt, env.task, obj )
                              .then(( value ) => { done( new Error( "Should be rejected!" )); },
                                    ( error ) => {
                                      // console.log( error );
                                      expect( error ).to.be.an( Error );
                                      expect( error.message === errmsg ).to.be.ok();
                                      done();
                               });
                         }).catch(( error ) => { done( error ); });
                       }).not.to.throwException();
      });
      it( "should be callable without parameters 'grunt' {grunt}, 'task' {task} and 'obj' {object} but get rejected (missing options.node.exec)", ( done ) => {
          const promise = checkoutdated.toArgs( env.grunt, env.task );
          const errmsg  = "execute: Missing property 'options.node.exec'.";
          expect(() => { promise.then(( obj ) => {
                           delete obj.opts.node.exec;
                           return tasks.execute( env.grunt, env.task, obj )
                              .then(( value ) => { done( new Error( "Should be rejected!" )); },
                                    ( error ) => {
                                      // console.log( error );
                                      expect( error ).to.be.an( Error );
                                      expect( error.message === errmsg ).to.be.ok();
                                      done();
                               });
                         }).catch(( error ) => { done( error ); });
                       }).not.to.throwException();
      });
      it( "should be callable without parameters 'grunt' {grunt}, 'task' {task} and 'obj' {object} and resolve (options.quiet === true, dryrun)", ( done ) => {
          const promise = checkoutdated.toArgs( env.grunt, env.task );
          const errmsg  = "execute: Missing property 'options.node.exec'.";
          expect(() => { promise.then(( obj ) => {
                          obj.opts.quiet  = true;
                          obj.opts.dryrun = true;
                          return tasks.execute( env.grunt, env.task, obj )
                                      .then(( value ) => {
                                              // console.log( value );
                                              done();
                                       });
                         }).catch(( error ) => { done( error ); });
                       }).not.to.throwException();
      });
      it( "should be callable without parameters 'grunt' {grunt}, 'task' {task} and 'obj' {object} and resolve (options.quiet === true, dryrun)", ( done ) => {
          const promise = checkoutdated.toArgs( env.grunt, env.task );
          const errmsg  = "execute: Missing property 'options.node.exec'.";
          expect(() => { promise.then(( obj ) => {
                          obj.opts.quiet  = true;
                          return tasks.execute( env.grunt, env.task, obj )
                                      .then(( value ) => {
                                              // console.log( value );
                                              done();
                                       });
                         }).catch(( error ) => { done( error ); });
                       }).not.to.throwException();
      }).timeout( 16000 );
    });
    describe( "Testing function 'runTask' of module 'checkoutdated'", () => {
      it( "should be callable without parameters but get rejected", ( done ) => {
          const errmsg = "checkoutdated.js - Function 'toArgs': missing parameter 'grunt'.";
          expect(() => { tasks.runTask()
                              .then(( value ) => { done( new Error( "Should be rejected!" )); },
                                    ( error ) => {
                                      // console.log( error );
                                      expect( error ).to.be.an( Error );
                                      expect( error.message === errmsg ).to.be.ok();
                                      done();
                               })
                              .catch(( error ) => { done( error ); });
                       }).not.to.throwException();
      });
      it( "should be callable without parameter 'grunt' {grunt} but get rejected", ( done ) => {
          const errmsg = "checkoutdated.js - Function 'toArgs': missing parameter 'task'.";
          expect(() => { tasks.runTask( env.grunt )
                              .then(( value ) => { done( new Error( "Should be rejected!" )); },
                                    ( error ) => {
                                      // console.log( error );
                                      expect( error ).to.be.an( Error );
                                      expect( error.message === errmsg ).to.be.ok();
                                      done();
                               })
                              .catch(( error ) => { done( error ); });
                       }).not.to.throwException();
      });
      it( "should be callable with parameters 'grunt' {grunt} and 'task' {task} but get rejected", ( done ) => {
          expect(() => { tasks.runTask( env.grunt, env.task )
                              .then(( value ) => {
                                      // console.log( value );
                                      done();
                               })
                              .catch(( error ) => { done( error ); });
                       }).not.to.throwException();
      }).timeout( 8000 );
    });
    describe( "Testing function 'registerMultiTask' of module 'checkoutdated'", () => {
      const errmsg      = "Cannot read property 'registerMultiTask' of undefined";
      const errmsg_v_16 = "Cannot read properties of undefined (reading 'registerMultiTask')"
      it( "should not be callable without parameters", () => {
          expect(() => { tasks.registerMultiTask(); }).to.throwException(( error ) => {
            // console.log( error );
            expect( error ).to.be.an( Error );
            expect(( error.message === errmsg ) || ( error.message === errmsg_v_16 )).to.be.ok();
          });
      });
      it( "should be callable with parameter 'grunt' {grunt}", () => {
          expect(() => { tasks.registerMultiTask( env.grunt ); }).not.to.throwException();
      });
    });
  });
})();
