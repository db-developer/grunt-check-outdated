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
      it( "Function 'executeChkOutdated' should exist", () => {
          expect( tasks.executeChkOutdated ).not.to.be( undefined  );
          expect( tasks.executeChkOutdated ).not.to.be( null       );
          expect( tasks.executeChkOutdated ).to.be.a(   "function" );
      });
      it( "Function 'runTaskChkOutdated' should exist", () => {
          expect( tasks.runTaskChkOutdated ).not.to.be( undefined  );
          expect( tasks.runTaskChkOutdated ).not.to.be( null       );
          expect( tasks.runTaskChkOutdated ).to.be.a(   "function" );
      });
      it( "Function 'registerMultiTaskChkOutdated' should exist", () => {
          expect( tasks.registerMultiTaskChkOutdated ).not.to.be( undefined  );
          expect( tasks.registerMultiTaskChkOutdated ).not.to.be( null       );
          expect( tasks.registerMultiTaskChkOutdated ).to.be.a(   "function" );
      });
    });
    describe( "Testing function 'executeChkOutdated' of module 'checkoutdated'", () => {
      it( "should be callable without parameters but get rejected", ( done ) => {
          const errmsg = "executeChkOutdated: Missing property 'obj.args'.";
          expect(() => { tasks.executeChkOutdated()
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
          const errmsg  = "executeChkOutdated: Missing property 'obj.opts'.";
          expect(() => { tasks.executeChkOutdated( undefined, undefined, { args })
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
          const errmsg  = "executeChkOutdated: Missing property 'options.cwd'.";
          expect(() => { promise.then(( obj ) => {
                           delete obj.opts.cwd;
                           return tasks.executeChkOutdated( env.grunt, env.task, obj )
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
          const errmsg  = "executeChkOutdated: Missing property 'options.node.exec'.";
          expect(() => { promise.then(( obj ) => {
                           delete obj.opts.node.exec;
                           return tasks.executeChkOutdated( env.grunt, env.task, obj )
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
          const errmsg  = "executeChkOutdated: Missing property 'options.node.exec'.";
          expect(() => { promise.then(( obj ) => {
                          obj.opts.quiet  = true;
                          obj.opts.dryrun = true;
                          return tasks.executeChkOutdated( env.grunt, env.task, obj )
                                      .then(( value ) => {
                                              // console.log( value );
                                              done();
                                       });
                         }).catch(( error ) => { done( error ); });
                       }).not.to.throwException();
      });
      it( "should be callable without parameters 'grunt' {grunt}, 'task' {task} and 'obj' {object} and resolve (options.quiet === true, dryrun)", ( done ) => {
          const promise = checkoutdated.toArgs( env.grunt, env.task );
          const errmsg  = "executeChkOutdated: Missing property 'options.node.exec'.";
          expect(() => { promise.then(( obj ) => {
                          obj.opts.quiet  = true;
                          return tasks.executeChkOutdated( env.grunt, env.task, obj )
                                      .then(( value ) => {
                                              // console.log( value );
                                              done();
                                       });
                         }).catch(( error ) => { done( error ); });
                       }).not.to.throwException();
      }).timeout( 8000 );
    });
    describe( "Testing function 'runTaskChkOutdated' of module 'checkoutdated'", () => {
      it( "should be callable without parameters but get rejected", ( done ) => {
          const errmsg = "checkoutdated.js - Function 'toArgs': missing parameter 'grunt'.";
          expect(() => { tasks.runTaskChkOutdated()
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
          expect(() => { tasks.runTaskChkOutdated( env.grunt )
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
          expect(() => { tasks.runTaskChkOutdated( env.grunt, env.task )
                              .then(( value ) => {
                                      // console.log( value );
                                      done();
                               })
                              .catch(( error ) => { done( error ); });
                       }).not.to.throwException();
      }).timeout( 8000 );
    });
    describe( "Testing function 'registerMultiTaskChkOutdated' of module 'checkoutdated'", () => {
      const errmsg  = "Cannot read property 'registerMultiTask' of undefined";
      it( "should not be callable without parameters", () => {
          expect(() => { tasks.registerMultiTaskChkOutdated(); }).to.throwException(( error ) => {
            // console.log( error );
            expect( error ).to.be.an( Error );
            expect( error.message === errmsg ).to.be.ok();
          });
      });
      it( "should be callable with parameter 'grunt' {grunt}", () => {
          expect(() => { tasks.registerMultiTaskChkOutdated( env.grunt ); }).not.to.throwException();
      });
    });
  });
})();
