adventurio.collections.StoryCollection = Backbone.Collection.extend({
	url:"/adventurio",
	model : adventurio.models.StoryModel,
	comparator : function(story){
		return story.get("name");
	}
});

adventurio.collections.StoriesCollection = Backbone.Collection.extend({
	url: "/stories",
	db : {
		view: "all_stories"
	},
	model: adventurio.models.StoryModel
	// ,
	// initialize: function(){
		// this.storyList = new StoryList;
		// this.bind("reset", this.storyList.renderList);
	// }
});


