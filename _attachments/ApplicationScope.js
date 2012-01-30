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