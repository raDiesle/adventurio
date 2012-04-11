// Backbone.history.start();


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




/*
 * This decorates Handlebars.js with the ability to load
 * templates from an external source, with light caching.
 * 
 * To render a template, pass a closure that will receive the 
 * template as a function parameter, eg, 
 *   T.render('templateName', function(t) {
 *       $('#somediv').html( t() );
 *   });
 */
//var Template = function() {
//    this.cached = {};
//};
//var T = new Template();
//$.extend(Template.prototype, {
//    render: function(name, callback) {
//        if (T.isCached(name)) {
//            callback(T.cached[name]);
//        } else {
//            $.get(T.urlFor(name), function(raw) {
//                T.store(name, raw);
//                T.render(name, callback);
//            });
//        }
//    },
//    renderSync: function(name, callback) {
//        if (!T.isCached(name)) {
//            T.fetch(name);
//        }
//        T.render(name, callback);
//    },
//    prefetch: function(name) {
//        $.get(T.urlFor(name), function(raw) { 
//            T.store(name, raw);
//        });
//    },
//    fetch: function(name) {
//        // synchronous, for those times when you need it.
//        if (! T.isCached(name)) {
//            var raw = $.ajax({'url': T.urlFor(name), 'async': false}).responseText;
//            T.store(name, raw);         
//        }
//    },
//    isCached: function(name) {
//        return !!T.cached[name];
//    },
//    store: function(name, raw) {
//        T.cached[name] = Handlebars.compile(raw);
//    },
//    urlFor: function(name) {
//        return "/src/adventurio/templates/listviews/"+ name + ".js";
//    }
//});