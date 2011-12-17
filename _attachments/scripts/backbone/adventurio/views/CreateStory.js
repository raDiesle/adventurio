var createStory_template = null;

adventurio.views.CreateStory = Backbone.View.extend({

	el: $('#mainpage'),
	initialize: function(){
		return this.render();
	},
	render: function(event){
		console.log("create story rendered");
		
		if(createStory_template === null) {
			createStory_template = $("#createStory_template").html();
		}
		
		var template = Handlebars.compile(createStory_template);
		var data = data || {};
		data = adventurio.mocks.singleStory;
		var context = {};
		if(data != null){
			console.log(data.rows);
			 context = {
				storyId : data._id,
				storyDescription : data.description,
				storyName : data.name,
				storyCreator : data.creator
		};
		}
		var html = template(context);

		// var compiled_template = _.template($("#showStories-template").html());
		// this.el.html(compiled_template(this.model.toJSON()));

		$("#createStory_content").html(html);
		// $("#createStory_content").listview("refresh");
		$("#createstory .storyname").text(data.name);

	}
	
	
		
});
