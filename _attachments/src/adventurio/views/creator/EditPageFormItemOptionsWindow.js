adventurio.views.creator.PageElementEditor = adventurio.views.superClasses.Basic.extend({
	el : $("#dialog_creator_fields_options"),
	initialize : function() {
		$().ready($.proxy(this.render, this));
		// hack
	},
	parameter : {
		vPos : {},
		hPos : {},
		fieldPos : {}
	},
	getTemplateValues : function() {
		return {
			vPos : this.parameter.vPos,
			hPos : this.parameter.hPos,
			fieldPos : this.parameter.fieldPos,
			storyId : this.model.id,
			field : this.model.getModelFieldPath(this.options.parameter.vPos, this.options.parameter.hPos, this.options.parameter.fieldPos)
		}
	},
	render : function() {
		this.constructor.__super__.makeLastPageTransparent.apply(this, [$("#page_creator_vPos_hPos")]);

		this._super("render", [adventurio.templates.creator.page.PageElementEditor.compile(this.getTemplateValues()), "Editor", {
			role : "dialog"
		}]);
	},
}); 