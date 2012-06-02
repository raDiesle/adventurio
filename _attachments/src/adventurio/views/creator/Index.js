adventurio.views.creator.Index = Backbone.View.extend({
	// not used - tested  , yet
	id : "creator_page",
	headerTitle : "creator index",
	initialize : function() {
		// hack, otherwise changePage throws exception
		$().ready(this.render);
	},
	events : {
		'click .addButton' : 'addStory'
	},
	addStory : function(event) {
		location.hash = "creator/stories/new";
	}
});
