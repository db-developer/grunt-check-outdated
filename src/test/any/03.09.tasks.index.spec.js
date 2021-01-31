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
      it( "Function 'registerMultiTaskChkOutdated' should exist", () => {
          expect( tasks.registerMultiTaskChkOutdated ).not.to.be( undefined  );
          expect( tasks.registerMultiTaskChkOutdated ).not.to.be( null       );
          expect( tasks.registerMultiTaskChkOutdated ).to.be.a(   "function" );
      });
      it( "Function 'runTaskChkOutdated' should exist", () => {
          expect( tasks.runTaskChkOutdated           ).not.to.be( undefined  );
          expect( tasks.runTaskChkOutdated           ).not.to.be( null       );
          expect( tasks.runTaskChkOutdated           ).to.be.a(   "function" );
      });
    });
  });
})();
