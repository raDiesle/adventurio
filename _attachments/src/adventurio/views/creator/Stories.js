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


		var context = {
			storyObjects : collection.toJSON()
		};

		var html = adventurio.templates.listviews.SimpleList.compile(context);

		var content = $('#creator_stories .content').first();
//		this.$('.listview').first().listview('refresh');
		try{
			$('#creator_stories ul').first().html(html).listview('refresh');
		}catch(exception){
		}
		$.mobile.changePage("#creator_stories", {transition: 'slideup', reverse: false, changeHash: false});
	},
	viewStory : function(e) {
		var dataUrl = $(e.currentTarget).attr("data-identity");

		location.hash = "creator/stories" + dataUrl;
	}
});

