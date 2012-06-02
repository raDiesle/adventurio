adventurio.views.reader.Stories = adventurio.views.superClasses.Basic.extend({
	id : "page_reader_ListStories",
	initialize : function() {
		this.collection.on('reset', this.render, this);
		this.collection.fetch();
	},
	getSpecificTemplateValues : function(){
		return{
			hedaerTitle : I18n.t("index.header"),
			visitEntryPrefix : 'reader/stories/',
			storyObjects : this.collection.toJSON()
		};		
	}
});