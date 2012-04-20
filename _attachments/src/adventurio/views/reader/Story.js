adventurio.views.reader.Story = adventurio.views.superClasses.Basic.extend({
	el : $('#page_reader_story'),
	initialize : function() {
		this.model.on('change', this.render, this);
		this.model.fetch();
	},
	render : function(story, response) {
		var context = {
			storyId : story.get("_id"),
			storyDescription : story.get("description"),
			storyName : story.get("name"),
			storyCreator : story.get("user"),
			storyTags : story.get("tags")
		};
		
		this._super("render", [adventurio.templates.forms.ReaderStory.compile(context), story.get("name")]); 
	},
	
	events : {
		"click a[data-theme='b']" : "editStory"
	},
	editStory : function(clickEvent) {
		var dataUrl = $(clickEvent.currentTarget).attr("data-identity");
		adventurio.routers.MainRouter.singleton.navigate("creator/stories/" + dataUrl, {trigger: true});
	}
});
