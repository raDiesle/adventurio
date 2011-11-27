StoriesCollection = Backbone.Collection.extend({
	model: Story,
	initialize: function(){
		this.storyList = new StoryList;
		this.bind("reset", this.storyList.renderList);
	}
})
