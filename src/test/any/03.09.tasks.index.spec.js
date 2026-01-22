/**
 *  © 2021, slashtasks.org.
 */
const expect    = require( "expect.js"   );

( async function() {
  const constants = require( "./00.00.constants" );
  const env       = await constants.env;

  describe( "03.09.tasks.index.spec.js - Testing module 'lib/tasks/index.js'", () => {
    const tasks   = require( "../../lib/tasks" );

    describe( "Testing exports of module 'tasks'", () => {
      it( "Function 'registerMultiTask' should exist", () => {
          expect( tasks.registerMultiTask ).not.to.be( undefined  );
          expect( tasks.registerMultiTask ).not.to.be( null       );
          expect( tasks.registerMultiTask ).to.be.a(   "function" );
      });
    });
  });
})();
