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
	templates : {
		global : {
			menus : {
				Simple : {
					compile : function(context) {
						return Handlebars.compile($("#templates_menus_simple").html())(context);
					}
				}
			},
		},
		// reader : {
			// StorySummary : {
				// compile : function(context) {
					// return Handlebars.compile($("#templates_reader_StorySummary").html())(context);
				// }
			// }
		// },
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
		creator : {
			Login : {
				compile : function(context) {
					return Handlebars.compile($("#templates_creator_login").html())(context);
				}
			},
			CreateAndEditStory : {
				compile : function(context) {
					return Handlebars.compile($("#templates_creator_story").html())(context);
				}
			},
			page : {
				DisplayElements : {
					compile : function(context) {
						return Handlebars.compile($("#templates_forms_dynamic").html())(context);
					}
				},
				element : {
					editor : {
						Buttons : {
							register : function() {
								Handlebars.registerPartial("templates_creator_page_element_editor_buttons", $("#templates_creator_page_editor_buttons").html());
							}
						}
					},
				}
			}
		},
		page : {
			element : {
				Header : {
					compile : function(context) {
						return Handlebars.compile($("#templates_creator_fields_linkPageDecisions_edit").html())(context);
					}
				},
				field : {
					Options : {
						compile : function(context) {
							return Handlebars.compile($("#template_creator_page_fields_options").html())(context);
						}
					},
					StaticText : {
						display : {
							register : function() {
								Handlebars.registerPartial("templates_creator_fields_text_display", $("#templates_creator_fields_text_display").html());
							}
						},
						edit : {
							compile : function(context) {
								return Handlebars.compile($("#templates_creator_fields_text_edit").html())(context);
							}
						},
						/*TODO*/
						options : {
							compile : function(context) {
								return Handlebars.compile($("#template_creator_fields_statictext_options").html())(context);
							}
						}
					},
					TextField : {
						display : {
							register : function() {
								Handlebars.registerPartial("templates_creator_fields_textfield_display", $("#templates_creator_fields_textfield_display").html());
							}
						},
						edit : {
							compile : function(context) {
								return Handlebars.compile($("#templates_creator_fields_textfield_edit").html())(context);
							}
						}
					}
				},
				LinkPageDecisions : {
					display : {
						register : function() {
							Handlebars.registerPartial("templates_creator_fields_linkPageDecisions_display", $("#templates_creator_fields_linkPageDecisions_display").html());
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

