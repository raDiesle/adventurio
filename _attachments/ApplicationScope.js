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
    		ManageStory : {},
    		Index: {},
    		Login: {},
    		Signup : {},
    		Stories: {}
    	},
    	reader : {
    		Index: {}
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
    		ManageStory : {},
    		Stories : {},
    		Login : {}
    	},
    	reader : {
    		Index : {}
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

