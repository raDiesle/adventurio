adventurio.views.creator.PageElementEditor = adventurio.views.superClasses.Basic.extend({
	id : "dialog_creator_fields_options",
	initialize : function() {
		$().ready($.proxy(this.render, this));
	},
	parameter : {
		vPos : {},
		hPos : {},
		fieldPos : {}
	},
	getSpecificTemplateValues : function() {
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

		this._super("render", ["Editor", {
			role : "dialog"
		}]);
	},
}); 