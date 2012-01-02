var createStory_template = null;

adventurio.views.CreateStory = Backbone.View.extend({

	el: $('#createstory'),
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

		$("#createStory_content").html(html);
		$("#createstory .storyname").text(data.name);
	},
	events : {
		"click #submitButton" : "createStory",
	},
	
	createStory : function(e){
		
		
		
		/*
		// test for fetch
		var stories = new adventurio.collections.StoriesCollection();
		var storyModel = new adventurio.models.StoryModel();
		stories.fetch();
		*/
		
	 
		var storyModel = new adventurio.collections.StoryCollection();
		var newStoryModel = storyModel.create({
			"name" : $("#createStory_storyName").val(),
			"creator" : $("#createStory_description").val(),
			"tags" : $("#createStory_tags").val()
		});
			
			
	 
		
	}
});
