
// Backbone.View.prototype._super = function(funcName){
    // return this.constructor.__super__[funcName].apply(this, _.rest(arguments));
// }

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
    // remote: "Veuillez remplir ce champ pour continuer.",
    // email: "Veuillez entrer une adresse email valide.",
    // url: "Veuillez entrer une URL valide.",
    // date: "Veuillez entrer une date valide.",
    // dateISO: "Veuillez entrer une date valide (ISO).",
    // number: "Veuillez entrer un nombre valide.",
    // digits: "Veuillez entrer (seulement) une valeur numÃ©rique.",
    // creditcard: "Veuillez entrer un numÃ©ro de carte de crÃ©dit valide.",
    // equalTo: "Veuillez entrer une nouvelle fois la mÃªme valeur.",
    // accept: "Veuillez entrer une valeur avec une extension valide.",
    // maxlength: jQuery.validator.format("Veuillez ne pas entrer plus de {0} caractÃ¨res."),
    // minlength: jQuery.validator.format("Veuillez entrer au moins {0} caractÃ¨res."),
    // rangelength: jQuery.validator.format("Veuillez entrer entre {0} et {1} caractÃ¨res."),
    // range: jQuery.validator.format("Veuillez entrer une valeur entre {0} et {1}."),
    // max: jQuery.validator.format("Veuillez entrer une valeur infÃ©rieure ou Ã©gale Ã  {0}."),
    // min: jQuery.validator.format("Veuillez entrer une valeur supÃ©rieure ou Ã©gale Ã  {0}.")
// });
