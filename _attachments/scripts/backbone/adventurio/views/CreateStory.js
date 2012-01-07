var createStory_template = null;

adventurio.views.CreateStory = Backbone.View.extend({
	
	el: $('#createstory'),
	initialize: function(){
		
		// var storyId = this.options.parameter.story || {};
		
		
		if(this.model){
			// var data = data || {};
			// data = );
			// this.model = data;
			this.model.bind('change', this.render, this);
			this.model.fetch(); // {success : this.showPrefilledEditStory}
		}else{
			this.render();
		}
		
		// return this.render();
	},
	render: function(event){
		console.log("create story rendered");
		
		if(createStory_template === null) {
			createStory_template = $("#createStory_template").html();
		}
		
		var template = Handlebars.compile(createStory_template);
		var context = {};
		
		if(event.toJSON()){
			var json = event.toJSON();
			 context = {
				storyId : json._id,
				storyDescription : json.description,
				storyName : json.name,
				storyTags : json.tags
			};
		}
		
		
		var html = template(context);
	
			$("#createStory_content").html(html).trigger("create");
			$("#createstory .storyname").text(context.storyName);
			$("#listedStories").listview("refresh");
		
		return this;
		
	},
	events : {
		"click #submitButton" : "createStory",
	},
	
	renderStory : function(context){
		var html = template(context);
	
			$("#createStory_content").html(html);
			$("#createstory .storyname").text(context.storyName);
	},
	
	showPrefilledEditStory : function(collection, response){
		var json = collection.toJSON();
			 context = {
				storyId : json._id,
				storyDescription : json.description,
				storyName : json.name,
				storyTags : json.tags
			};
			self.renderStory(context);
	},
	
	createStory : function(e){
		
		var storyModel = new adventurio.collections.StoryCollection();
		var newStoryModel = storyModel.create({
			"name" : $("#createStory_storyName").val(),
			"creator" : $("#createStory_description").val(),
			"tags" : $("#createStory_tags").val()
		});
			
			
	 
		
	}
});
