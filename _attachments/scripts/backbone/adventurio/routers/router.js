

var AdventurioController = {};

// AdventurioController.mainpage = function(type, match, ui){
	// console.log("mainpage " + type + " " + match);
	// new adventurio.views.ShowStories();
// };

	$.mobile.hashListeningEnabled = false;
    $.mobile.pushStateEnabled = false;
    $.mobile.page.prototype.options.degradeInputs.date = true;



// $(document).bind("mobileinit",function(){
//    
// });


adventurio.routers.MainRouterRef = Backbone.Router.extend({
	initialize : function(){
		console.log("initialized");
	},
	bookmarkMode:false,
	story: '',
	v: '',
	h: '',
	routes: {
		"reader": 											"mainpage",
		"reader/stories": 									"mainpage", 
		"reader/stories/:story": 							"viewstory", 
		"creator/stories": 									"creator_stories",
		"creator/stories/new":								"createstory",
		"creator/stories/:story": 							"editstory",
		"creator/stories/:story/:vertical/:horizontal": 	"createpage",
		"": 												"mainpage",
	}, 
	
	creator_stories: function(query, sort, page){
		console.log(page + " " + query + " was opened");
		new adventurio.views.creator.Stories();
	},
	mainpage: function(query, sort, page){
		console.log("mainpage " + page + " " + query);
		new adventurio.views.ShowStories();
	},
	viewstory : function(query, sort, page){
		console.log("viewstory page was opened ");
		var view = new adventurio.views.ShowStory({'parameter' : {'storyId': query}});
	},
	createstory : function(query, sort, page){
		console.log("createstory page was opened");
		new adventurio.views.CreateStory();
	},
	editstory : function(query, sort, page){
		console.log("editstory page was opened");
		// var parameter = AdventurioController.router.getParams(match[1]) || {};
		// var storyId = parameter.story;
		// var newModel;
		// if(storyId){
			newModel = new adventurio.models.StoryModel({'_id': query});
		// }
		new adventurio.views.EditStory({model: newModel});
	},
	createpage : function(storyId, vertical, horizontal){
		console.log("createpage was opened");
		var storyId = storyId;
		var newModel = new adventurio.models.StoryModel({_id: storyId});
		new adventurio.views.CreatePage({model: newModel}); 
	},
	 defaultRoute: function(other){
        console.log("Invalid. You attempted to reach:" + other);
    }
});

adventurio.routers.MainRouter = new adventurio.routers.MainRouterRef;


Backbone.history.start();
