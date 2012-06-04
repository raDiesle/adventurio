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
	}
});
