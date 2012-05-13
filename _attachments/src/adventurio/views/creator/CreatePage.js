adventurio.views.creator.CreatePage = adventurio.views.superClasses.Basic.extend({
	el : $('#page_creator_vPos_hPos'),
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
		$().ready($.proxy(this.render, this)); // hack
	},
	render : function() {
		// Hack
		$('.edit_area').trigger('create');
		$('input').textinput();

	var html ="";
	var context = {};
	context.props = {};
	context.props.vertical = this.options.parameter.vPos;
	context.props.horizontal = this.options.parameter.hPos;
	context.props._id = this.model.id;
	context.formItems = this.model.get("levels")[this.options.parameter.vPos-1].pages[this.options.parameter.hPos-1].fields;
	
	this._super("render", [adventurio.templates.forms.Dynamic.compile(context), "Story header"]);
	},
	events : {
		"click .edit_area" : "triggerCreate",
		"click .saveButton" : "saveEditedValue"
		// ,"click .setFormItemProperties" : "openFormItemProperties"
	}
	// ,
	// openFormItemProperties : function(clickEvent){
		// var clickedFormItemPos = $(e.currentTarget).attr("data-identity");
		// var urlToCurrentCreatePage = location.hash + clickedFormItemPos;
		// //var urlToCurrentCreatePage = "creator/stories/"+this.model.get("_id")+"/"+this.model.get("vertical")+"/"+this.model.get("horizontal")+"?edit";
		// adventurio.routers.MainRouter.singleton.navigate(urlToCurrentCreatePage, {trigger: true});
	// }
	
	,saveEditedValue : function(clickEvent) {
		clickEvent.preventDefault();
		this.attributes.editModeStatus.LEAVES_WRITE_MODE = true;
		this.attributes.editModeStatus.READ_MODE = true;
	},
	triggerCreate : function(event) {
		event.stopPropagation();
		var containerEditElement = $(event.currentTarget);

		if(this.attributes.editModeStatus.READ_MODE && !this.attributes.editModeStatus.LEAVES_WRITE_MODE) {
			var context = {};
			var currentContent = containerEditElement.html().replace(/<br>/g, "\n");
			context.value = currentContent;
		
			containerEditElement.html(adventurio.templates.formitems.Text.edit.compile(context));
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
