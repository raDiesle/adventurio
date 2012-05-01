adventurio.views.creator.Index = Backbone.View.extend({
	el : $('#'),
	initialize : function() {
		// hack, otherwise changePage throws exception
		$().ready(this.render);
	},
	render : function() {
		$.mobile.changePage('#creator_page', {
			transition : 'slideup',
			role : "page",
			reverse : false,
			changeHash : false
		});
	},
	events : {
		'click .addButton' : 'addStory'
	},
	addStory : function(event) {
		location.hash = "creator/stories/new";
	}
});
