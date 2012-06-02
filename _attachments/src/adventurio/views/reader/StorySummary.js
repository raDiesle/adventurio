adventurio.views.reader.StorySummary = adventurio.views.superClasses.Basic.extend({
	id : "page_reader_StorySummary",
	getHeaderTitle : function() {
		return this.model.get("name")
	},
	initialize : function() {
		this.model.on('change', this.render, this);
		this.model.lazyFetch();
	},
	getSpecificTemplateValues : function() {
		return this.model.toJSON();
	}
});
