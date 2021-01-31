/**
 *  © 2021, slashlib.org.
 */
const expect    = require( "expect.js"   );

( async function() {
  const constants = require( "./00.00.constants" );
  const env       = await constants.env;

  describe( "10.00.plugin.spec.js - Testing grunt plugin interface 'tasks/tasks.js'", () => {
    try {
      const plugin = require( "../../tasks/tasks" );

      describe( "Testing exports of module 'tasks/tasks'", () => {
        it( "'plugin' should exist", () => {
            expect( plugin ).not.to.be( undefined  );
            expect( plugin ).not.to.be( null       );
            expect( plugin ).to.be.a(   "function" );
        });
        it( "'plugin' should register", () => {
            expect(() => { plugin( env.grunt ) }).not.to.throwException();
        });
      });
    } catch( error ) { console.log( error ); }
  });
})();
