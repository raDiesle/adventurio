/*
 * Initialize namespacing
 */

var adventurio = adventurio || {
    models : {
    	StoryModel : {},
    	User: {},
    },
    views : {
    	creator : {
    		Index: {},
    		Login: {},
    		Stories: {}
    	},
    	ShowStories : {},
    	ShowStory : {},
    	CreateStory : {},
    	EditStory : {},
    	CreatePage :{},
        pages : {}
    },
    templates: {
    	creator: {
    		Stories: {},
    		Login: {}
    	}
    },
    mocks: {
    	SingleStory: {},
    	Stories: {}
    },
    routers : {
    	MainRouter: {},
    },
    collections : {
    	StoryCollection : {},
    	StoriesCollection : {}
	},
    utils:{}
};




/*
 * Initializing parameters
 */

// $(document).bind("mobileinit",function(){
        // $.mobile.jqmRouter={
            // ajaxApp: true
        // };
    // });
    
// function registerPlugins(){
	// $.extend({
	  // getUrlVars: function(){
	    // var vars = [], hash;
	    // var hashes =
		// window.location.href.slice(window.location.href.indexOf('?') +
		// 1).split('&');
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
 * var myApplication = { models : {}, views : { pages : {} }, collections : {} };
 * 
 * define(["./views/appView", "util/loadCss", "scripts/lib/backbone.js",
 * "scripts/lib/underscore.js", "scripts/lib/jquery.tmpl.js"],
 * 
 * function (AppView, loadCss){ // loadCss("adventurio"); var app = new
 * AppView(); return {}; });
 */