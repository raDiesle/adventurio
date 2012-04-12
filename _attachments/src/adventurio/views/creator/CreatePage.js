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
		$().ready($.proxy(this.render, this)); // hack
	},
	render : function() {

	var formItems = [
			{
			type : 'text',
			value : 'The big crash'
			},
			{
			type : 'textfield',
			value : 'Enter player name'
			}
		];

		// Hack
		$('.edit_area').trigger('create');
		$('input').textinput();

	
	Handlebars.registerPartial("templates_formitems_text", $("#templates_formitems_text").html());
	Handlebars.registerPartial("templates_formitems_textfield", $("#templates_formitems_textfield").html());
	
	
	Handlebars.registerHelper("ifIsTypeOf", function(actualFormItem, formItemTypeToCheck, fn, elseFn) {
		if(actualFormItem.type === formItemTypeToCheck){
			return fn(actualFormItem);
		}
	});

	var html ="";
	// $.each(formItems, function(index, currentFormItem){
		// switch(currentFormItem.type){
			// case "text" :
				// html += adventurio.templates.formitems.Text.compile(currentFormItem);
				// break;
			// case "textfield" :
				// html += adventurio.templates.formitems.TextItem.compile(currentFormItem);
			// break;
		// };
	// });
	var context = {};
	context.formItems = formItems;
html = adventurio.templates.forms.Dynamic.compile(context);
	this._super("render", [html, "Story header"]);
	// console.log(adventurio.utilies.Json.json2xml(element));
		// this._super("render", [adventurio.utilies.Json.json2xml(element), "Story header"]);
	},
	events : {
		"click .edit_area" : "triggerCreate",
		"click .saveButton" : "saveEditedValue",
		"click .setFormItemProperties" : "openFormItemProperties"
	},
	openFormItemProperties : function(clickEvent){
		var urlToCurrentCreatePage = location.hash + "?edit";
		//var urlToCurrentCreatePage = "creator/stories/"+this.model.get("_id")+"/"+this.model.get("vertical")+"/"+this.model.get("horizontal")+"?edit";
		adventurio.routers.MainRouterSingleton.get().navigate(urlToCurrentCreatePage, {trigger: true});		
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
});
