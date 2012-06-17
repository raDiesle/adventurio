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
			Basic : {},
			Validateable : {},
			BasicDialog : {}
		},
		creator : {
			ManageStory : {},
			BrowseStory : {},
			ManagePage : {},
			PageElementEditor : {},
			PageLinkEditor : {},
			Index : {},
			Login : {},
			Signup : {},
			Stories : {},
			EditStory : {},
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
	},
	events : {
		SubmitForm : {}
	}
};

window.adventurio = adventurio;

