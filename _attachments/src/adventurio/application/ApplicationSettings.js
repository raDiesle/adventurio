// Backbone.history.start();

 I18n.fallbacks = true;
 I18n.defaultLocale = "de"
 I18n.locale = "en";
 
// Singletons
//adventurio.models.UserSingleton =  new adventurio.models.User();
adventurio.routers.MainRouterSingleton.get();
Backbone.history.start(); // {silent:true, pushState:true}

//Backbone.couch_connector.config.db_name = "adventurio";
//Backbone.couch_connector.config.ddoc_name = "adventurio";
// If set to true, the connector will listen to the changes feed
// and will provide your models with real time remote updates.
//Backbone.couch_connector.config.global_changes = false;

$(document).ajaxError(function(event, jqXHR, ajaxSettings, thrownError) {
	if(thrownError === "Unauthorized") {
		// location.hash = "creator/login";
		$.mobile.changePage('#creator_login', {
			transition : 'slideup',
			role : "dialog",
			reverse : false,
			changeHash : false
		});

	}
});
// not working, yet

if( doExecutionHandling = false) {
	$(window).error(function(errorMessage, fileName, lineNumber) {
		console.log("error occured and logged");
	});

	window.onerror = fehler();

	function fehler(msg, name, ln) {
		console.log("log error to db in the future");
	}

}


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

