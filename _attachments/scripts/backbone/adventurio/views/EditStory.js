var editStory_template = null;

adventurio.views.EditStory = Backbone.View.extend({
	
	el: $('#editstory'),
	initialize: function(){
		this.model.bind('change', this.render, this);
		this.model.fetch(); 
		// return this.render();
	},
	render: function(event){
		console.log("edit story rendered");
		
		if(editStory_template === null) {
			editStory_template = $("#editStory_template").html();
		}
		
		var template = Handlebars.compile(editStory_template);
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
		$.mobile.changePage("#editstory", {transition: 'slideup', reverse: false, changeHash: false});
		
		
		return this;
	},
	events : {
		"click #submitButton" : "editStory",
	},
	
	editStory : function(event){
		
		console.log(this.model);
		var storyModelReal = new adventurio.models.StoryModel({
				"name" : $("#editStory_storyName").val(),
				"description" : $("#editStory_description").val(),
				"tags" : $("#editStory_tags").val()
		});
		
		var storyModel = new adventurio.collections.StoryCollection(storyModelReal);
		
		
		if(this.model){
			storyModelReal.save({success: location.hash = "reader/stories/"+storyModelReal.toJSON._id});
		}
	},
	createPage : function(model, response){
		console.log("storymodel was edited");
		
		
		location.hash = "creator/stories" + "/"+ model.toJSON().id + "/v1/h1";
	}
});
