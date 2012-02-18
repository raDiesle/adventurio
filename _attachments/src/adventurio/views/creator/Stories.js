adventurio.views.creator.Stories = Backbone.View.extend({
	el : $('#creator_stories'),
	initialize : function() {
		return this.render();
	},
	render : function(event) {
		var data = new adventurio.collections.StoriesCollection;
		data.fetch({
			success : this.showStories
		});
	},
	events : {
		"click a" : "viewStory"
	},
	showStories : function(collection, response) {

		var context = {
			storyObjects : collection.toJSON()
		};

		var html = adventurio.templates.listviews.SimpleList.compile(context);

		var content = $('#creator_stories .content').first();
		try{
			$('#creator_stories ul').first().html(html).listview('refresh');
//		
		}catch(exception){
		}
		$.mobile.changePage("#creator_stories", {transition: 'slideup', reverse: false, changeHash: false});
	},
	viewStory : function(e) {
		var dataUrl = $(e.currentTarget).attr("data-identity");

		location.hash = "creator/stories" + dataUrl;
	}
});

