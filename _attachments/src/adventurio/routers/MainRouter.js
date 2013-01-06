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
		"creator" : "doCreatorIndexPageRequestedAction",
		"reader/stories" : "doListStoriesInReadModeRequestedAction",
		"reader/stories/:story" : "doViewSingleStoryInReadModeRequestedAction",
		"creator/login" : "login_dialog",
		"creator/signup" : "signup_dialog",
		"creator/stories" : "creator_stories",
		"creator/stories/new" : "doCreateNewStoryRequestedAction",
		"creator/stories/:storyId?edit" : "doEditStoryAction",
		// "creator/stories/:story?browse" : "doNavigatePagesRequestedAction",
		"creator/stories/:storyId/:vertical" : "doNavigatePagesRequestedAction",

		// "creator/stories/:story?browse=:verticalFrom-:verticalTo" : "doNavigatePagesRequestedAction",
		"creator/stories/:storyId" : "doManageStoryRequestedAction",
		"creator/stories/:storyId/:vertical/:horizontal" : "doManagePageAction",
        "creator/stories/:storyId/:vertical/:horizontal/:formItemPos" : "doEditPageFormItemOptionsAction",
        "creator/stories/:storyId/:vertical/:horizontal/links/:linkPos" : "doManagePageLinksAction",
        "creator/stories/:story/:vertical/:horizontal/links/:linkPos/:destVPos" : "doNavigatePagesForLinkDestination",
        "creator/stories/:story/:vertical/:horizontal/links/:linkPos/:destVPos/:destHPos" : "doManagePageLinksAction",
		"" : "doIndexHomePageRequestedAction"
	},
	doEditPageFormItemOptionsAction : function(storyId, vPos, hPos, fieldPos) {
		new adventurio.views.creator.PageElementEditor({
			parameter : {
				'vPos' : vPos,
				'hPos' : hPos,
				'fieldPos' : fieldPos
			},
            model : new adventurio.models.StoryModel({
                    '_id' : storyId
                }
			)
		})
	},
	doManagePageLinksAction : function(storyId, vPos, hPos, linkPos, destVPos, destHPos) {
		new adventurio.views.creator.PageLinkEditor({
			parameter : {
				'vPos' : vPos,
				'hPos' : hPos,
				'linkPos' : linkPos,
                'destVPos' : destVPos,
                'destHPos' : destHPos
			},
			model : new adventurio.models.StoryModel({
				'_id' : storyId
			})
		});
	},
    doNavigatePagesForLinkDestination : function(storyId, srcVPos, srcHPos, linkPos, destVPos){
        new adventurio.views.creator.DestinationPageSelection({
            parameter : {
                'verticalFrom' : destVPos,
                'srcVPos' : srcVPos,
                'srcHPos' : srcHPos,
                'linkPos' : linkPos
            },
            model : new adventurio.models.StoryModel({
                '_id' : storyId
            })
        });
    },
	doNavigatePagesRequestedAction : function(storyId, verticalFrom) {
		console.log(storyId + "_" + verticalFrom);
		if (verticalFrom == undefined) {
			verticalFrom = 1;
		}

		new adventurio.views.creator.BrowseStory({
			parameter : {
				'verticalFrom' : verticalFrom
			},
			model : new adventurio.models.StoryModel({
				'_id' : storyId
			})
		});
	},
	doIndexHomePageRequestedAction : function() {
		new adventurio.views.reader.Index();
	},
	doCreatorIndexPageRequestedAction : function() {
		new adventurio.views.creator.Index();
	},
	login_dialog : function() {
		new adventurio.views.creator.Login();
	},
	signup_dialog : function() {
		new adventurio.views.creator.Signup();
	},
	creator_stories : function(query, sort, page) {
		new adventurio.views.creator.Stories({
			collection : new adventurio.collections.StoriesCollection()
		});
	},
	doListStoriesInReadModeRequestedAction : function() {
		new adventurio.views.reader.Stories({
			collection : new adventurio.collections.StoriesCollection()
		});
	},
	doViewSingleStoryInReadModeRequestedAction : function(requestedStoryId) {
		new adventurio.views.reader.StorySummary({
			model : new adventurio.models.StoryModel({
				_id : requestedStoryId
			})
		});
	},
	doEditStoryAction : function(requestedStoryId) {
		new adventurio.views.creator.Story({
			model : new adventurio.models.StoryModel({
				_id : requestedStoryId
			})
		});
	},
	doCreateNewStoryRequestedAction : function() {
		new adventurio.views.creator.CreateStory();
	},
	doManagePageAction : function(storyId, vPos, hPos) {
		new adventurio.views.creator.ManagePage({
			parameter : {
				'vPos' : vPos,
				'hPos' : hPos
			},
			model : new adventurio.models.StoryModel({
				_id : storyId
			})
		});
	},
	doManageStoryRequestedAction : function(storyId) {
		new adventurio.views.creator.ManageStory({
			model : new adventurio.models.StoryModel({
				_id : storyId
			})
		});
	},
	defaultRoute : function(other) {
		console.log("Invalid. You attempted to reach:" + other);
	}
});

