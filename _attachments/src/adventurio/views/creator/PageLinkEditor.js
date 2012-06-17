adventurio.views.creator.PageLinkEditor = adventurio.views.superClasses.BasicDialog.extend({
	id : "dialog_creator_link_options",
	transparentBackgroundPageElID : "page_creator_vPos_hPos",
	parameter : {
		vPos : {},
		hPos : {},
		linkPos : {}
	},
	getSpecificTemplateValues : function() {
		return {
			headerTitle : "Edit Link to another page",
			vPos : this.parameter.vPos,
			hPos : this.parameter.hPos,
			linkPos : this.parameter.linkPos,
			storyId : this.model.id,
			field : this.getCurrentLinkProperties()
		}
	},
	initialize : function() {
		this.model.on('change', this.render, this);
		this.model.lazyFetch();
	},
	getCurrentLinkProperties : function() {
		return this.model.getModelLinksPath(this.options.parameter.vPos, this.options.parameter.hPos, this.options.parameter.linkPos);
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