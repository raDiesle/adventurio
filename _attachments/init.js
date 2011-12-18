/*
 * Initialize namespacing
 */

var adventurio = {
    models : {
    	StoryModel : {}
    },
    views : {
    	ShowStories : {},
    	ShowStory : {},
    	CreateStory : {},
        pages : {}
    },
    mocks : {},
    routers : {},
    collections : {
    	StoryCollection : {},
    	StoriesCollection : {}
	},
    utils:{}
};

// function registerPlugins(){
	// $.extend({
	  // getUrlVars: function(){
	    // var vars = [], hash;
	    // var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
	    // for(var i = 0; i < hashes.length; i++)
	    // {
	      // hash = hashes[i].split('=');
	      // vars.push(hash[0]);
	      // vars[hash[0]] = hash[1];
	    // }
	    // return vars;
	  // },
	  // getUrlVar: function(name){
	    // return $.getUrlVars()[name];
	  // }
	// });
// }
// registerPlugins();
/*
var myApplication = {
    models : {},
    views : {
        pages : {}
    },
    collections : {}
};

define(["./views/appView",
		"util/loadCss",
		"scripts/lib/backbone.js",
		"scripts/lib/underscore.js",
		"scripts/lib/jquery.tmpl.js"],
		
		function (AppView, loadCss){
			// loadCss("adventurio");
			var app = new AppView();
			return {};
		});
*/