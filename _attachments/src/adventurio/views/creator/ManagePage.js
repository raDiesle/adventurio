adventurio.views.creator.ManagePage = adventurio.views.superClasses.Basic.extend({
	id : "page_creator_vPos_hPos",
	getCurrentPage : function() {
		return this.model.getModelPagePath(this.options.parameter.vPos, this.options.parameter.hPos);
	},
	getSpecificTemplateValues : function() {
		return {
			headerTitle : this.getCurrentPage().header.value,
			props : {
				vertical : this.options.parameter.vPos,
				horizontal : this.options.parameter.hPos,
				_id : this.model.id
			},
			fields : this.getCurrentPage().fields,
			linkPageDecisions : this.getCurrentPage().linkPageDecisions
		}
	},
	initialize : function() {
		this.model.on('change', this.render, this);
		this.model.lazyFetch();
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
		fieldToBeChanged.value = editedValueToSave.replace(/^\s+|\s+$/g, "").replace(/\n/g, "<br>");
		// .replace( /\r?\n/g, "\r\n"
		this.model.save();
		// this.model.toJSON()
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
			context.pos = containerEditElement.data("identity");

			containerEditElement.html(adventurio.templates.creator.page.fields.StaticText.edit.compile(context));

			// hack to support autoscroll
			// $('.edit_area').trigger('create');
			// $('input').textinput();
			this.attributes.editModeStatus.READ_MODE = false;
		} else if(this.attributes.editModeStatus.LEAVES_WRITE_MODE) {
			// go to read mode
			// var valueForReadMode = $('textarea', containerEditElement).val().replace(/\n/g, "<br>");
			// containerEditElement.html(valueForReadMode);
			this.attributes.editModeStatus.LEAVES_WRITE_MODE = false;
		}
	}
});
