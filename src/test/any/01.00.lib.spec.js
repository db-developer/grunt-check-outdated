/**
 *  © 2021, slashlib.org.
 */
const expect    = require( "expect.js"   );

( async function() {
  const constants = require( "./00.00.constants" );
  const env       = await constants.env;

  describe( "01.00.lib.spec.js - Testing module 'lib/lib.js'", () => {
    const lib   = require( "../../lib/lib" );

    describe( "Testing exports of module 'lib'", () => {
      it( "Function 'getCheckOutdatedPath' should exist", () => {
          expect( lib.getCheckOutdatedPath ).not.to.be( undefined  );
          expect( lib.getCheckOutdatedPath ).not.to.be( null       );
          expect( lib.getCheckOutdatedPath ).to.be.a(   "function" );
      });
      it( "Function 'isArray' should exist", () => {
          expect( lib.isArray         ).not.to.be( undefined  );
          expect( lib.isArray         ).not.to.be( null       );
          expect( lib.isArray         ).to.be.a(   "function" );
      });
    });
    describe( "Testing function 'getCheckOutdatedPath' of module 'lib'", () => {
      it( "should be callable without parameters", () => {
          expect(() => { lib.getCheckOutdatedPath(); }).not.to.throwException();
      });
      it( "should return a path {string}", () => {
          const value = lib.getCheckOutdatedPath();
          expect( value ).to.be.a( "string" );
      });
    });
    describe( "Testing function 'isArray' of module 'lib'", () => {
      it( "should not be callable without parameters", () => {
          expect(() => { lib.isArray(); }).to.throwException();
      });
      it( "should not be callable with parameter 'grunt' {grunt} soley", () => {
          expect(() => { lib.isArray( env.grunt ); }).to.throwException();
      });
      it( "should be callable with parameters 'grunt' {grunt} and 'options' {Array}", () => {
          expect(() => { lib.isArray( env.grunt, [ ]); }).not.to.throwException();
      });
      it( "should be callable with parameters 'grunt' {grunt}, 'options' {Array} and 'name' {string}", () => {
          expect(() => { lib.isArray( env.grunt, [ ] , "name" ); }).not.to.throwException();
      });
      it( "should be callable with parameters 'grunt' {grunt}, 'options' {Array}, 'name' {string} and callback", () => {
          const callback = () => { };
          expect(() => { lib.isArray( env.grunt, [ "blubb" ] , "name", callback ); }).not.to.throwException();
      });
    });
  });
})();
