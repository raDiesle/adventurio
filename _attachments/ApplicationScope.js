/*
 * Initialize namespacing
 */

var adventurio = adventurio || {
	routers : {
		MainRouter : {
			singleton : {}
		}
	},
	models : {
		StoryModel : {},
		SingleStorySingleton : {},
		User : {}
	},
	collections : {
		StoryCollection : {
			singleton : {}
		},
		StoriesCollection : {}
	},
	views : {
		superClasses : {
			Basic : {}
		},
		creator : {
			ManageStory : {},
			BrowseStory : {},
			ManagePage : {},
			PageElementEditor : {},
			Index : {},
			Login : {},
			Signup : {},
			Stories : {},
			Story : {},
			CreateStory : {}
		},
		reader : {
			Index : {},
			Story : {},
			Stories : {},
		}
	},
	mocks : {
		SingleStory : {},
		Stories : {}
	},
	utilies : {
		Json : {
			xml2json : {},
			json2xml : {},
			addElement : {},
			createElement : {}
		},
		handlebars :{
			findAndRegisterPartials : {}
		}
	},
	application : {
		jeditable : {
			MarkItUpSettings : {}
		}
	}
};

window.adventurio = adventurio;

