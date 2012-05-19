adventurio.views.reader.Story = adventurio.views.superClasses.Basic.extend({
	el : $('#page_reader_story'),
	initialize : function() {
		this.model.on('change', this.render, this);
		this.model.lazyFetch();
	},
	render : function(story, response) {
		this._super("render", [adventurio.templates.forms.ReaderStory.compile(this.model.toJSON()), this.model.get("name")]); 
	}
});
