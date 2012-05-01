
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
		"creator/stories/:story?edit" : "doEditStoryAction",
// "creator/stories/:story?browse" : "doNavigatePagesRequestedAction",
		"creator/stories/:story/:vertical" : "doNavigatePagesRequestedAction",
// "creator/stories/:story?browse=:verticalFrom-:verticalTo" : "doNavigatePagesRequestedAction",
		"creator/stories/:storyId" : "doManageStoryRequestedAction",
		"creator/stories/:storyId/:vertical/:horizontal" : "doCreatePageAction",
		"creator/stories/:storyId/:vertical/:horizontal/:formItemPos" : "doEditPageFormItemOptionsAction",
		"" : "doIndexHomePageRequestedAction",
	},
	doEditPageFormItemOptionsAction : function(storyId, verticalFrom, verticalTo, formItemPos){
		new adventurio.views.creator.EditPageFormItemOptionsWindow({
			parameter : {'verticalFrom' : verticalFrom, 'verticalTo' : verticalTo},
			model : new adventurio.models.StoryModel({
				'_id' : storyId
			}) 
		})
	},
	doNavigatePagesRequestedAction : function(storyId, verticalFrom, verticalTo){
		console.log(storyId + "_" + verticalFrom + "_" + verticalTo);
		if(verticalFrom == undefined){
			verticalFrom = 1;
		}
		if(verticalTo == undefined){
			verticalTo = 3;
		}
		new adventurio.views.creator.BrowseStory({
			parameter : {'verticalFrom' : verticalFrom, 'verticalTo' : verticalTo},
			collection : new adventurio.collections.StoriesCollection(),
			model : new adventurio.models.StoryModel({
				'_id' : storyId
			})
		});
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
		new adventurio.views.creator.Stories({
			collection : new adventurio.collections.StoriesCollection()
		});
	},
	doListStoriesInReadModeRequestedAction : function() {
		new adventurio.views.reader.Stories({
			collection : new adventurio.collections.StoriesCollection()
		}
		);
	},
	doViewSingleStoryInReadModeRequestedAction : function(requestedStoryId) {
		var myModel = new adventurio.models.StoryModel({
			_id : requestedStoryId
		});
		
		var view = new adventurio.views.reader.Story({
			model : myModel
		});
	},
	doEditStoryAction : function(storyId) {
		adventurio.views.creator.Story.updateModel(storyId);
	},
	doCreateNewStoryRequestedAction : function() {
		adventurio.views.creator.CreateStory.render();
	},
	doCreatePageAction : function(storyId, vertical, horizontal) {
		
		// var formItems = [
			// {
			// type : 'text',
			// value : 'The big crash',
			// formItemPos : 1
			// },
			// {
			// type : 'textfield',
			// value : 'Enter player name',
			// formItemPos : 2
			// }
		// ];
		
		var newModel = new adventurio.models.StoryModel({
			_id : storyId
			// ,formItems : formItems
		});
		adventurio.views.creator.CreatePage.singleton = new adventurio.views.creator.CreatePage({
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



