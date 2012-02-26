var createPage_template = null;

adventurio.views.CreatePage = adventurio.views.superClasses.Basic.extend({

	el : $('#createpage'),
	attributes : {
		editModeStatus : {
			ENTERS_WRITE_MODE : true,
			// ENTERS_READ_MODE : false,
			READ_MODE : true,
			// LEAVES_READ_MODE : false,
			LEAVES_WRITE_MODE : false
		}
	},
	initialize : function() {
		console.log(this.model.toJSON()._id);
		// hack, otherwise changePage throws exception
		$().ready($.proxy(this.render, this));
	},
	render : function() {
		var element = {
			"ul" : {
				"@data-role" : "listview",
				"@data-inset" : true,
				"li" : [{
					"span" : {
						"#text" : "#mytext",
						"@id" : "textid"
					},
				}, {
					"input" : {
						"@type" : "text",
						"@placeholder" : "Enter character name"
					}
				}, {
					"div" : {
						"@data-role" : "fieldcontain",
						"@class" : "edit_area",
						// "@style" : "height: auto; width : 100%;",
						 "#text" : "mytext  testxX" // \u000A\u000D <br />  \n  &#13;&#10;
					}
				}, {
					"textarea" : {
						"#text" : "thats it",
						"@class" : "edit_area",
						"@style" : "width : 100%"
					}
				}]
			}
		};

// Hack
		$('.edit_area').trigger('create');
		$('input').textinput();

		this._super("render", [adventurio.utilies.Json.json2xml(element), "Story header"]);
	},
	events : {
		"click .edit_area" : "triggerCreate",
		"click .saveButton" : "saveEditedValue"
	},
	saveEditedValue : function(clickEvent) {
		clickEvent.preventDefault();
		this.attributes.editModeStatus.LEAVES_WRITE_MODE = true;
		this.attributes.editModeStatus.READ_MODE = true;
	},
	triggerCreate : function(event) {
		event.stopPropagation();
		var containerEditElement = $(event.currentTarget);

		if(this.attributes.editModeStatus.READ_MODE && !this.attributes.editModeStatus.LEAVES_WRITE_MODE) {
			var currentContent = containerEditElement.html().replace(/<br>/g, "\n");
			var editModeContent = {
				"textarea" : {
					"@class" : 'ui-input-text ui-body-c ui-corner-all ui-shadow-inset',
					"#text" : currentContent
				},
				"a" : {
					"@href" : '#',
					"@data-role" : 'button',
					'@class' : 'saveButton',
					"#text" : 'save'
				}
			};
			containerEditElement.html(adventurio.utilies.Json.json2xml(editModeContent));
			// hack to support autoscroll
			$('.edit_area').trigger('create');
			$('input').textinput();
			this.attributes.editModeStatus.READ_MODE = false;
		} else if(this.attributes.editModeStatus.LEAVES_WRITE_MODE) {
			// go to read mode
			containerEditElement.html($('textarea', containerEditElement).val().replace(/\n/g, "<br>"));
			this.attributes.editModeStatus.LEAVES_WRITE_MODE = false;
		}
	}
	// ,
	// renderTemplate: function(htmlContent, headerTitle){
	// $('[data-role="content"]', this.el).html(htmlContent);
	// //		.trigger("create");
	// //		$("ul", this.el).listview('refresh');
	// $("ul", this.el).trigger("create");
	// $('h1', this.el).text(headerTitle);
	// $.mobile.changePage("#"+this.el.id, {
	// transition : 'slideup',
	// reverse : false,
	// changeHash : false
	// });
	// }
});
