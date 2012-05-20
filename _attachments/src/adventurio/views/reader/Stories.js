adventurio.views.reader.Stories = adventurio.views.superClasses.Basic.extend({
	id : "page_reader_ListStories",
	initialize : function() {
		this.collection.on('reset', this.render, this);
		this.collection.fetch();
	},
	getSpecificTemplateValues : function(){
		return{
			visitEntryPrefix : 'reader/stories/',
			storyObjects : this.collection.toJSON()
		};		
	},
	render : function(collection, response) {
		this._super("render", [I18n.t("index.header")]);
	}
});