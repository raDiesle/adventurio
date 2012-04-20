/*
 * Initialize namespacing
 */

var adventurio = adventurio || {
    models : {
    	StoryModel : { singleton : {}},
    	User : {},
    	UserSingleton: { get : function(){
    		return new adventurio.models.User();
    	}},
    },
    collections : {
    	StoryCollection : { singleton : {}},
    	StoriesCollection : {}
	},
    views : {
    	superClasses : {
    		Basic : {}
    	},
    	creator : {
    		ManageStory : {},
    		BrowseStory : {},
    		CreatePage : { singleton : {}},
    		EditPageFormItemOptionsWindow : {},
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
    	formitems : {
    		Options : {
    			compile : function(context){
    				return Handlebars.compile($("#template_formitem_options").html())(context);
    			}
    		},
    		Text : {
    			compile : function(context){
    				return Handlebars.compile($("#templates_formitems_text").html())(context);
    			}
    		},
    		TextField : {
    			compile : function(context){
    				return Handlebars.compile($("#templates_formitems_textfield").html())(context);
    			}
    		}
		},
    	forms : {
    		Story :{
    			compile : function(context){
    				return Handlebars.compile($("#templates_forms_story").html())(context);
    			}
    		},
    		ReaderStory : {
    			compile : function(context){
    				return Handlebars.compile($("#templates_forms_ReaderStory").html())(context);
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
    	MainRouter : { singleton : {}},
    	MainRouterSingleton: { get : function(){
    		return new adventurio.routers.MainRouter();
    	}},
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

