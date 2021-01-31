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
      it( "Function 'registerMultiTaskChkOutdated' should exist", () => {
          expect( idx.registerMultiTaskChkOutdated ).not.to.be( undefined  );
          expect( idx.registerMultiTaskChkOutdated ).not.to.be( null       );
          expect( idx.registerMultiTaskChkOutdated ).to.be.a(   "function" );
      });
    });
  });
})();
