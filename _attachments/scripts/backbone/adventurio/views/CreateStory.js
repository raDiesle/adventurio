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
		console.log("create Story clicked");
		
		var stories = new adventurio.collections.StoriesCollection();
		
		// test for create 
		var storyModel = new adventurio.models.StoryModel();
		var newStoryModel = storyModel.create({
			"name" : name,
			"creator" : creator
		});
			
			
		// test for fetch
		var storyModel = adventurio.models.StoryModel;
		storyModel.fetch();
		
		var name = "Hofmann";
	 	var creator = "GameCreator";
	 
		
	}
});
