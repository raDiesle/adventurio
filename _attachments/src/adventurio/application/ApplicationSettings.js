
 

//adventurio.models.UserSingleton =  new adventurio.models.User();
adventurio.routers.MainRouter.singleton = new adventurio.routers.MainRouter();//.get();
$(function(){
	Backbone.history.start(); // {silent:true, pushState:true}
});
/* Couchdb plugin settings */
//Backbone.couch_connector.config.db_name = "adventurio";
//Backbone.couch_connector.config.ddoc_name = "adventurio";
// If set to true, the connector will listen to the changes feed
// and will provide your models with real time remote updates.
//Backbone.couch_connector.config.global_changes = false;

/* Handler to redirect to login, if needed */
$(document).ajaxError(function(event, jqXHR, ajaxSettings, thrownError) {
	if(thrownError === "Unauthorized") {
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

