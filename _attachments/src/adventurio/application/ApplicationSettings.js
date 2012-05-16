
// Backbone.View.prototype._super = function(funcName){
    // return this.constructor.__super__[funcName].apply(this, _.rest(arguments));
// }

//adventurio.models.UserSingleton =  new adventurio.models.User();
adventurio.routers.MainRouter.singleton = new adventurio.routers.MainRouter();//.get();
$(function(){
	Backbone.history.start(); // {silent:true, pushState:true}
});
/* Couchdb plugin settings */
// Backbone.couch_connector.config.ddoc_name = "adventurio";
// If set to true, the connector will listen to the changes feed
// and will provide your models with real time remote updates.
Backbone.couch_connector.config.global_changes = false;

/* Handler to redirect to login, if needed */
$(document).ajaxError(function(event, jqXHR, ajaxSettings, thrownError) {
	if(thrownError === "Unauthorized" || thrownError === "Forbidden") {
		adventurio.routers.MainRouter.singleton.navigate("creator/login",{trigger : true});
	}
});

/* Catch js errors to not crash application - not working, yet */

if( doExecutionHandling = false) {
	$(window).error(function(errorMessage, fileName, lineNumber) {
		console.log("error occured and logged");
	});

	window.onerror = fehler();

	function fehler(msg, name, ln) {
		console.log("log error to db in the future");
	}

}

/* I18n settings */
I18n.defaultLocale = "de"
I18n.fallbacks = true;
I18n.locale = "en";

/* Serialize form to JSON */
(function( $ ){
	$.fn.serializeJSON=function() {
	var json = {};
	jQuery.map($(this).serializeArray(), function(n, i){
	json[n['name']] = n['value'];
	});
	return json;
	};
	})( jQuery );

// check for handlebar helpers
// https://github.com/kanso/handlebars-helpers/blob/master/build/helpers.js

// jQuery.extend(jQuery.validator.messages, {
    // required: "Ce champ est requis.",
// });

 $.validator.addMethod("noSpecialChars", function(value, element) {
        return this.optional(element) || /^\s*[a-zA-Z0-9,\s]+\s*$/.test(value);
    }, "Letters, spaces and Numbers allowed");
