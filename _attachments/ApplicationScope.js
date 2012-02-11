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
    		Stories: {},
    		Login: {}
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

