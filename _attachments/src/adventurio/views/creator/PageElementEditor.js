adventurio.views.creator.PageElementEditor = adventurio.views.superClasses.BasicDialog.extend({
	id : "dialog_creator_fields_options",
	transparentBackgroundPageElID : "page_creator_vPos_hPos",
	parameter : {
		vPos : {},
		hPos : {},
		fieldPos : {}
	},
	getSpecificTemplateValues : function() {
		return {
			headerTitle : "Edit Element",
			vPos : this.parameter.vPos,
			hPos : this.parameter.hPos,
			fieldPos : this.parameter.fieldPos,
			storyId : this.model.id,
			field : this.getCurrentField()
		}
	},
	initialize : function() {
		this.model.on('change', this.render, this);
		this.model.lazyFetch();
	},
	getCurrentField : function() {
		return this.model.getModelFieldPath(this.options.parameter.vPos, this.options.parameter.hPos, this.options.parameter.fieldPos);
	},
	onSuccessfulValidation : function() {
		var fieldOptionValues = $("form", this.el).serializeJSON();

		this.getCurrentField().value = fieldOptionValues.value.replace(/^\s+|\s+$/g, "").replace(/\n/g, "<br>");
		// .replace( /\r?\n/g, "\r\n"
		// this.model.trigger("change");

		this.model.save(this.model.toJSON(), {
			success : function(model, response) {
				history.go(-1);
			}
		});
	}
});
