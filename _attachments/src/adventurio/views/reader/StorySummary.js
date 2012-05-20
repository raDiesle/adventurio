adventurio.views.reader.StorySummary = adventurio.views.superClasses.Basic.extend({
	id : "page_reader_StorySummary",
	initialize : function() {
		this.model.on('change', this.render, this);
		this.model.lazyFetch();
	},
	getSpecificTemplateValues : function(){
		return this.model.toJSON();
	},
	render : function(story, response) {
		this._super("render", [this.model.get("name")]); 
	}
});
