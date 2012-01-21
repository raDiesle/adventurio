function( newDoc, oldDoc, userCtx ) {
  // Load validation script.
  var v = require("vendor/couchapp/lib/validate").init( newDoc, oldDoc, userCtx );
 
  // Create method to test if valid user.
  v.isAlbumsUser = function() {
    return v.isAdmin() || userCtx.roles.indexOf("albums-user") != -1;
  }
 
  // Ensure that a current session exists for editing.
  if( !userCtx.name ) {
    v.unauthorized( "You need to be logged in order to do that." );
  }
  else if( !v.isAlbumsUser() ) {
    v.forbidden( "You do not have proper access to edit this document." );
  }
 
  // Ensure that any updates need to match user.
  var isDeletingWithoutPermission = ( newDoc._deleted && ( oldDoc.user != userCtx.name ) );
  var isUpdatingWithoutPermission = ( newDoc.user != userCtx.name ) || ( oldDoc && ( newDoc.user != oldDoc.user ) );
  // If either non-permission criteria is met, checking delete first...
  if( !v.isAdmin() && isDeletingWithoutPermission ) {
    v.forbidden( "Only the creator of this document has permission to delete." );
  }
  else if( !v.isAdmin && ( !newDoc._deleted && isUpdatingWithoutPermission ) ) {
    v.forbidden( "Only the creator of this document has permission to update." );
  }
  else {
    // If it is being deleted, we are all set.
    if( newDoc._deleted ) return true;
 
    // Require a user field.
    v.require( "user" );
    // Ensure the assigned user is not changed.
    v.unchanged( "user" );
    // Ensure that user does not have value of undefined.
    v.assert( (newDoc.user != "undefined"), "New documents must have an associated user." );
  }
}