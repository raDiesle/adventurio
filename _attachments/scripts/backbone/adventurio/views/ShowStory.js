var showStory_template = null;

adventurio.views.ShowStory = Backbone.View.extend({
	
	el : $('#viewstory'),
	initialize : function() {
		return this.render();
	},
	render : function(event) {
		console.log("showStory was renedered");
		
		var storyId = this.options.parameter.story;
		var data = data || {};
		data = new adventurio.models.StoryModel({	_id: storyId});
		data.fetch({success: this.showStory});
	},
	
	events : {
		"click #viewstory_edit" : "editStory"
	},

	showStory : function(collection, response){
		if(showStory_template === null) {
			showStory_template = $("#showStory_template").html();
		}

		var template = Handlebars.compile(showStory_template);
		
		var json = collection.toJSON();
		
		var context = {
			storyId : json._id,
			storyDescription : json.description,
			storyName : json.name,
			storyCreator : json.creator,
			storyTags : json.tags
		};
		var html = template(context);
		$("#viewStory_content").html(html);
		$("#storyheader .storyname").text(json.name);
		
	},

	editStory : function(e) {
		console.log("Edit story link clicked");
		var dataUrl = $(e.currentTarget).attr("data-url");
		if(dataUrl != null) {
			$.mobile.changePage("#editstory" + dataUrl, {dataUrl: "#editstory" + dataUrl});
		}

		// $.mobile.changePage("index.html#singleStory");
	}

});
