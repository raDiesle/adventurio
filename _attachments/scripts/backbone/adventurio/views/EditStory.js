var createStory_template = null;

adventurio.views.EditStory = Backbone.View.extend({
	
	el: $('#editstory'),
	initialize: function(){
		this.model.bind('change', this.render, this);
		this.model.fetch(); 
		// return this.render();
	},
	render: function(event){
		// console.log("create story rendered");
		
		if(createStory_template === null) {
			createStory_template = $("#createStory_template").html();
		}
		
		var template = Handlebars.compile(createStory_template);
		var context = {};
		
		if(event != undefined && event.toJSON()){
			var json = event.toJSON();
			 context = {
				storyId : json._id,
				storyDescription : json.description,
				storyName : json.name,
				storyTags : json.tags
			};
		}
		
		
		var html = template(context);
	
		$("#editStory_content").html(html).trigger("create");
		$("#editstory .storyname").text(context.storyName);
		$("#listedStories");
		// .listview("refresh")
		return this;
	},
	events : {
		"click #submitButton" : "createStory",
	},
	
	createStory : function(event){
		
		
		var storyModelReal = new adventurio.models.StoryModel({
				"name" : $("#createStory_storyName").val(),
				"description" : $("#createStory_description").val(),
				"tags" : $("#createStory_tags").val()
		});
		
		var storyModel = new adventurio.collections.StoryCollection(storyModelReal);
		
		
		if(this.model){
			storyModelReal.save({success: this.createPage});
			console.log("storymodel was edited");
		}
		
		// if(!this.model){
			// var newStoryModel = storyModel.create(storyModelReal, {success: this.createPage});
			// console.log("story was created");
		// }
	},
	createPage : function(event){
		$.mobile.changePage("#createpage?story=" + event.id);
	
	}
});
