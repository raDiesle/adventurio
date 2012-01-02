adventurio.collections.StoryCollection = Backbone.Collection.extend({
	url:"/adventurio",
	model: adventurio.models.StoryModel,
	comparator : function(story){
		return story.get("name");
	}
});

adventurio.collections.StoriesCollection = Backbone.Collection.extend({
	db : {
		view: "all_stories"
	},
	url: "/all_stories",
	model: adventurio.models.StoryModel
	// ,
	// initialize: function(){
		// this.storyList = new StoryList;
		// this.bind("reset", this.storyList.renderList);
	// }
});


