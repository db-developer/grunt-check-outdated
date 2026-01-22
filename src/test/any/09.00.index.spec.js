/**
 *  © 2021, slashlib.org.
 */
const expect    = require( "expect.js"   );

( async function() {
  const constants = require( "./00.00.constants" );
  const env       = await constants.env;

  describe( "09.00.index.spec.js - Testing module 'lib/index.js'", () => {
    const idx     = require( "../../lib/index" );

    describe( "Testing exports of module 'index'", () => {
      it( "Function 'registerMultiTask' should exist", () => {
          expect( idx.registerMultiTask ).not.to.be( undefined  );
          expect( idx.registerMultiTask ).not.to.be( null       );
          expect( idx.registerMultiTask ).to.be.a(   "function" );
      });
    });
  });
})();
