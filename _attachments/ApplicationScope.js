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
			CreatePage : {},
			EditPageFormItemOptionsWindow : {},
			Index : {},
			Login : {},
			Signup : {},
			Stories : {},
			Story : {},
			CreateStory : {}
		},
		reader : {
			Index : {},
			Stories : {},
		},
		ShowStory : {},
		CreateStory : {},
		EditStory : {},
		pages : {}
	},
	templates : {
		menus : {
			Simple : {
				compile : function(context) {
					return Handlebars.compile($("#templates_menus_simple").html())(context);
				}
			}
		},

		forms : {
			ReaderStory : {
				compile : function(context) {
					return Handlebars.compile($("#templates_forms_ReaderStory").html())(context);
				}
			},
			Dynamic : {
				compile : function(context) {
					return Handlebars.compile($("#templates_forms_dynamic").html())(context);
				}
			}
		},
		listviews : {
			Browse : {
				compile : function(context) {
					return Handlebars.compile($("#templates_listviews_Browse").html())(context);
				}
			},
			SimpleList : {
				compile : function(context) {
					return Handlebars.compile($("#templates_listviews_SimpleList").html())(context);
				}
			}
		},
		Login : {
			compile : function(context) {
				return Handlebars.compile($("#templates_creator_login").html())(context);
			}
		},
		creator : {
			CreateAndEditStory : {
				compile : function(context) {
					return Handlebars.compile($("#templates_creator_story").html())(context);
				}
			},
			page : {
				Header : {
					compile : function(context) {
						return Handlebars.compile($("#templates_creator_formitems_linkPageDecisions_edit").html())(context);
					}
				},
				formitems : {
					StaticText : {
						display : {
							register : function() {
								Handlebars.registerPartial("templates_creator_formitems_text_display", $("#templates_creator_formitems_text_display").html());
							}
						},
						edit : {
							compile : function(context) {
								return Handlebars.compile($("#templates_creator_formitems_text_edit").html())(context);
							}
						},
						/*TODO*/
						options : {
							compile : function(context) {
								return Handlebars.compile($("#template_creator_formitems_text_options").html())(context);
							}
						}
					},
					TextField : {
						display : {
							register : function() {
								Handlebars.registerPartial("templates_creator_formitems_textfield_display", $("#templates_creator_formitems_textfield_display").html());
							}
						},
						edit : {
							compile : function(context) {
								return Handlebars.compile($("#templates_creator_formitems_textfield_edit").html())(context);
							}
						}
					}
				},
				LinkPageDecisions : {
					display : {
						register : function() {
							Handlebars.registerPartial("templates_creator_formitems_linkPageDecisions_display", $("#templates_creator_formitems_linkPageDecisions_display").html());
						}
					}
				}
			}
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
		}
	},
	application : {
		jeditable : {
			MarkItUpSettings : {}
		}
	}
};

window.adventurio = adventurio;

