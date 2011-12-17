var showStory_template = null;
adventurio.views.ShowStory = Backbone.View.extend({
	el : $('viewstory'),
	initialize : function(){
		return this.render;
	},
	render : function(event){
		console.log("showStory was renedered");
		if(showStory_template === null){
			showStory_template = $("#showStory_template").html();
		}
		
		var template = Handlebars.compile(listAllStories_template);
		var data = data || {};
		data = adventurio.mocks.singleStory;
		console.log(data);
		var context = {
				storyId : data._id,
				storyDescription : data.description,
				storyName : data.name,
				storyCreator : data.creator
			};
		var html = template(context);
		$("#viewStory_content").html(html);
		// var html = "<h2 class=\"storyCreator\"" + storyCreator + "<\/h2>" + "<p class=\"storyName\">" + storyName + "<\/p>" + "<p class=\"description\">" + storyDescription + "<\/p>";
		// $("#storycontent").append(html);
		$("#storyheader .storyname").text(data.name);
	}
});
	