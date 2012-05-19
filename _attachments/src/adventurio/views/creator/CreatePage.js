adventurio.views.creator.CreatePage = adventurio.views.superClasses.Basic.extend({
	el : $('#page_creator_vPos_hPos'),
	attributes : {
	},
	initialize : function() {
		// $().ready($.proxy(this.render, this)); // hack
		this.model.on('change', this.render, this);
		this.model.lazyFetch(); 
	},
	render : function() {
		$("#page_creator_vPos_hPos").removeClass("ui-dialog-background ");
		// Hack
		$('.edit_area').trigger('create');
		$('input').textinput();

		var html ="";
		var context = {};
		context.props = {};
		context.props.vertical = this.options.parameter.vPos;
		context.props.horizontal = this.options.parameter.hPos;
		context.props._id = this.model.id;
		var currentPage = this.model.getModelPagePath(this.options.parameter.vPos, this.options.parameter.hPos);
		context.fields = currentPage.fields;
		context.linkPageDecisions = currentPage.linkPageDecisions;
	
		this._super("render", [adventurio.templates.forms.Dynamic.compile(context), currentPage.header.value]);
	},
	events : {
		// "click .edit_area" : "triggerCreate",
		// "click .saveButton" : "saveEditedValue"
		// "click a" : "openFormItemProperties"
	},
	saveEditedValue : function(clickEvent) {
		clickEvent.preventDefault();
		this.attributes.editModeStatus.LEAVES_WRITE_MODE = true;
		this.attributes.editModeStatus.READ_MODE = true;
		
		var fieldPos = $(clickEvent.currentTarget).data("identity");
		var vPos = this.options.parameter.vPos;
		var hPos = this.options.parameter.hPos;
		
		// var fieldToChange = this.model.getModelFieldPath(vPos, hPos, fieldPos);
		var editedValueToSave = $(clickEvent.currentTarget).prev().val();
		var fieldToBeChanged = this.model.getModelFieldPath(vPos, hPos, fieldPos);
		fieldToBeChanged.value = editedValueToSave.replace(/^\s+|\s+$/g, "").replace(/\n/g, "<br>"); // .replace( /\r?\n/g, "\r\n"
		this.model.save(); // this.model.toJSON()
		// this.model.set({fields : });
		// this.model.setModelFieldValue(vPos, hPos, fieldPos, editedValueToSave);
		
	},
	triggerCreate : function(event) {
		event.stopPropagation();
		var containerEditElement = $(event.currentTarget);

		// && !this.attributes.editModeStatus.LEAVES_WRITE_MODE
		if(this.attributes.editModeStatus.READ_MODE && !this.attributes.editModeStatus.LEAVES_WRITE_MODE) {
			var context = {};
			context.value = containerEditElement.html().replace(/<br>/g, "\n");
			context.pos =  containerEditElement.data("identity");
			
			containerEditElement.html(adventurio.templates.creator.page.fields.StaticText.edit.compile(context));

			// hack to support autoscroll
			$('.edit_area').trigger('create');
			$('input').textinput();
			this.attributes.editModeStatus.READ_MODE = false;
		} else if(this.attributes.editModeStatus.LEAVES_WRITE_MODE) {
			// go to read mode
			// var valueForReadMode = $('textarea', containerEditElement).val().replace(/\n/g, "<br>");
			// containerEditElement.html(valueForReadMode);
			this.attributes.editModeStatus.LEAVES_WRITE_MODE = false;
		}
	}
});
