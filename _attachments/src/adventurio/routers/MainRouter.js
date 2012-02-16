
$.mobile.hashListeningEnabled = false;
$.mobile.pushStateEnabled = false;
$.mobile.page.prototype.options.degradeInputs.date = true;

// $(document).bind("mobileinit",function(){
//
// });

adventurio.routers.MainRouter = Backbone.Router.extend({
	initialize : function() {
	},
	bookmarkMode : false,
	story : '',
	v : '',
	h : '',
	routes : {
		"reader" : "doListStoriesInReadModeRequestedAction",
		"creator": "doCreatorIndexPageRequestedAction",
		"reader/stories" : "doListStoriesInReadModeRequestedAction",
		"reader/stories/:story" : "doViewSingleStoryInReadModeRequestedAction",
		"creator/login": "login_dialog",
		"creator/signup": "signup_dialog",
		"creator/stories" : "creator_stories",
		"creator/stories/new" : "doCreateNewStoryRequestedAction",
		"creator/stories/:story?edit" : "editstory",
		"creator/stories/:story" : "doManageStoryRequestedAction",
		"creator/stories/:story/:vertical/:horizontal" : "createpage",
		"" : "doIndexHomePageRequestedAction",
	},
	doIndexHomePageRequestedAction : function(){
		new adventurio.views.reader.Index();
	},
	doCreatorIndexPageRequestedAction : function(){
		new adventurio.views.creator.Index();
	}
	,
	login_dialog: function(){
		new adventurio.views.creator.Login();	
	},
	signup_dialog : function(){
		new adventurio.views.creator.Signup();
	},
	creator_stories : function(query, sort, page) {
		console.log(page + " " + query + " was opened");
		new adventurio.views.creator.Stories();
	},
	doListStoriesInReadModeRequestedAction : function() {
		new adventurio.views.reader.Stories();
	},
	doViewSingleStoryInReadModeRequestedAction : function(requestedStoryId) {
		var view = new adventurio.views.ShowStory({
			'parameter' : {
				'storyId' : requestedStoryId
			}
		});
	},
	doCreateNewStoryRequestedAction : function() {
		new adventurio.views.CreateStory();
	},
	editstory : function(storyId) {
		newModel = new adventurio.models.StoryModel({
			'_id' : storyId
		});
		new adventurio.views.EditStory({
			model : newModel
		});
	},
	createpage : function(storyId, vertical, horizontal) {
		var newModel = new adventurio.models.StoryModel({
			_id : storyId
		});
		new adventurio.views.CreatePage({
			model : newModel
		});
	},
	doManageStoryRequestedAction : function(storyId){
		new adventurio.views.creator.ManageStory({
				model : new adventurio.models.StoryModel({
			_id : storyId 
		}),
		el : $('#creator_stories_storyid')});
	},
	defaultRoute : function(other) {
		console.log("Invalid. You attempted to reach:" + other);
	}
});



