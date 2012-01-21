adventurio.templates.creator.stories = null;

adventurio.views.creator.Stories = Backbone.View.extend({

	el : $('#creator_stories'),
	initialize : function() {
		return this.render();
	},
	render : function(event) {
		console.log("creator.stories was renedered");

		var data = new adventurio.collections.StoriesCollection;
		data.fetch({
			success : this.showStories
		});
		// function(collection, response){ console.log("SUCCESS");}

	},
	events : {
		"click .liAnchor" : "viewStory"
	},
	showStories : function(collection, response) {
		if(adventurio.templates.creator.stories === null) {
			adventurio.templates.creator.stories = $("#creator_stories_template").html();
		}

		var template = Handlebars.compile(adventurio.templates.creator.stories);

		var context = {
			storyObjects : collection.toJSON()
		};

		var html = template(context);

		var content = this.$('.content').first();
		content.html(html);
		this.$('.listview').first().listview('refresh');
		$.mobile.changePage("#creator_stories", {transition: 'slideup', reverse: false, changeHash: false}); // {dataUrl: "#editstory" + dataUrl}
	},
	viewStory : function(e) {
		var dataUrl = $(e.currentTarget).attr("data-identity");

		location.hash = "creator/stories" + dataUrl;
	}
});

