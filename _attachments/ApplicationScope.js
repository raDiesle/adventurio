/*
 * Initialize namespacing
 */

var adventurio = adventurio || {
    models : {
    	StoryModel : {},
    	User : {},
    	UserSingleton: { get : function(){
    		return new adventurio.models.User();
    	}},
    },
    views : {
    	superClasses : {
    		Basic : {}
    	},
    	creator : {
    		ManageStory : {},
    		BrowseStory : {},
    		Index: {},
    		Login: {},
    		Signup : {},
    		Stories: {},
    		Story : {}
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
    	forms : {
    		Story :{
    			compile : function(context){
    				return Handlebars.compile($("#templates_forms_story").html())(context);
    			}
    		},
    		Dynamic : {
    			compile : function(context){
    				return Handlebars.compile($("#templates_forms_dynamic").html())(context);
    			}
    		}
    	},
    	listviews : {
    		Browse : {
    			compile : function(context){
    				return Handlebars.compile($("#templates_listviews_Browse").html())(context);
    			}
    		},
    		SimpleList : {
    			compile : function(context){
    				return Handlebars.compile($("#templates_listviews_SimpleList").html())(context);
    			}
    		}
    	},
    	creator: {
    		CreateStory : {
    			compile : function(context){
    				return Handlebars.compile($("#createStory_template").html())(context);
    			}
    		},
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
    	MainRouter : {},
    	MainRouterSingleton: { get : function(){
    		new adventurio.routers.MainRouter();
    	}},
    },
    collections : {
    	StoryCollection : {},
    	StoriesCollection : {}
	},
    utilies:{
    	Json : {
    		xml2json : {},
    		json2xml : {},
    		addElement : {},
    		createElement : {}
    	}
    },
    application : {
    	jeditable : {
    		MarkItUpSettings : {}
    	}
    }
};

