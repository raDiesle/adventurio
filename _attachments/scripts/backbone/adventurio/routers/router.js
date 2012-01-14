

var AdventurioController = {};

// AdventurioController.mainpage = function(type, match, ui){
	// console.log("mainpage " + type + " " + match);
	// new adventurio.views.ShowStories();
// };

AdventurioController.router = new $.mobile.Router([
		
		{"#mainpage(?:[?/](.*))?": { 
			handler: "mainpage", events:"bc"
		}},
		{"#test(?:[?/](.*))?": {
			handler: "test", events:"bc"
		}},
		{"#viewstory(?:[?/](.*))?": {
			handler: "viewstory", events:"bc"
		}},
		{"#createstory(?:[?/](.*))?": {
			handler: "createstory", events:"bc"
		}},
		{"#editstory(?:[?/](.*))?": {
			handler: "editstory", events:"bc"
		}},
		{"#createpage": {
			handler: "createpage", events:"bc"
		}}
		// ,{ defaultHandler:{ handler:"defaultHandler", defaultHandlerEvents: "bc"}}
], {
	
	mainpage : function(type, match, ui){
		console.log("mainpage " + type + " " + match);
		new adventurio.views.ShowStories();
	}, 
	test : function(type, match, ui){
		console.log("test page was opened");
	},
	viewstory : function(type, match, ui){
		console.log("viewstory page was opened");
		var parameter = AdventurioController.router.getParams(match[1]);
		var view = new adventurio.views.ShowStory({'parameter' : parameter});
	},
	createstory : function(type, match, ui){
		console.log("createstory page was opened");
		var parameter = AdventurioController.router.getParams(match[1]) || {};
		var storyId = parameter.story;
		var newModel;
		if(storyId){
			newModel = new adventurio.models.StoryModel({_id: storyId});
		}
			new adventurio.views.CreateStory({model: newModel});
	},
	editstory : function(type, match, ui){
		console.log("editstory page was opened");
		var parameter = AdventurioController.router.getParams(match[1]) || {};
		var storyId = parameter.story;
		var newModel;
		if(storyId){
			newModel = new adventurio.models.StoryModel({_id: storyId});
		}
	},
	createpage : function(type, match, ui){
		console.log("createpage was opened");
		var parameter = AdventurioController.router.getParams(match[1]) || {};
		var storyId = parameter.story;
		var newModel = new adventurio.models.StoryModel({_id: storyId});
		new adventurio.views.CreatePage({model: newModel}); // 
	}
	
},
	{
	defaultHandler: function(type, match, ui){
		console.log("nothing found to match");
	}, defaultHandlerEvents: "s, bc,c,i,bs"}
);

adventurio.routers = AdventurioController.router;


