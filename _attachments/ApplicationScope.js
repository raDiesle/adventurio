/*
 * Initialize namespacing
 */

var adventurio = adventurio || {
    models : {
    	StoryModel : { singleton : {}},
    	User : { singleton : {}}
    	// ,
    	// UserSingleton: { get : function(){
    		// return new adventurio.models.User();
    	// }},
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
    		Story : {singleton : {}},
    		CreateStory : {}
    	},
    	reader : {
    		Index: {},
    		Stories : {},
    	},
    	ShowStory : {},
    	CreateStory : { singleton : {}},
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
    		}
    		,SimpleList : {
    			compile : function(context){
    				return Handlebars.compile($("#templates_listviews_SimpleList").html())(context);
    			}
    		}
    	},
    	creator: {
    		Story :{
    			compile : function(context){
    				return Handlebars.compile($("#templates_creator_story").html())(context);
    			}
    		},
    		ManageStory : {},
    		Stories : {},
    		Login : {
    			compile : function(context){
    				return Handlebars.compile($("#templates_creator_login").html())(context);
    			}
    		}
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
    	MainRouter : { singleton : {}}
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

