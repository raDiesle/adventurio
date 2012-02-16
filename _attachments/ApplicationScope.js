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
    		Index: {},
    		Stories : {},
    	},
    	ShowStory : {},
    	CreateStory : {},
    	EditStory : {},
    	CreatePage :{},
        pages : {}
    },
    templates: {
    	menus : {
    		Simple : {
    			compile : function(context){
    				return Handlebars.compile($("#templates_menus_simple").html())(context);
    			}
    		}
    	},
    	listviews : {
    		SimpleList : {
    			compile : function(context){
    				return Handlebars.compile($("#templates_listviews_SimpleList").html())(context);
    			}
    		}
    	},
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

