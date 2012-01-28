var createStory_template = null;

adventurio.views.CreateStory = Backbone.View.extend({

	el : $('#createstory'),
	initialize : function() {
		// hack, otherwise changePage throws exception
		$().ready(this.render);
		// this.render();
	},
	render : function(event) {
		
			console.log("create rendered");
		if(createStory_template === null) {
			createStory_template = $("#createStory_template").html();
		}

		var template = Handlebars.compile(createStory_template);
		var context = {};

		// if(event != undefined && event.toJSON()) {
			// var json = event.toJSON();
			// context = {
				// storyId : json._id,
				// storyDescription : json.description,
				// storyName : json.name,
				// storyTags : json.tags
			// };
		// }


		var html = template(context);

		$("#createStory_content").html(html).trigger("create");
		$("#createstory .storyname").text(context.storyName);
		// $("#listedStories");
		// .listview("refresh")
		
		$.mobile.changePage("#createstory", {
				transition : 'slideup',
				reverse : false,
				changeHash : false
			});
		
		// return this;
	},
	events : {
		"click .submit" : "createStory",
	},

	createStory : function(event) {

		var storyModelReal = new adventurio.models.StoryModel({
			"name" : $("#createStory_storyName").val(),
			"description" : $("#createStory_description").val(),
			"tags" : $("#createStory_tags").val(),
			"user" : "simpleUser"
		});

		// var storyModel = new adventurio.collections.StoryCollection(storyModelReal);

		// if(this.model){
		// storyModel.update({success: this.createPage});
		// console.log("storymodel was saved");
		// }

		// if(!this.model) {
			var newStoryModel = storyModelReal.save(storyModelReal,{
				success: this.createPage,
				error: this.errorHandling
			});
		// }
	},
	createPage : function(model, response) {
		console.log("storymodel was edited");

		location.hash = "creator/stories" + "/" + model.toJSON()._id + "/v1/h1";
	},
	errorHandling : function(model, response){
		console.log(response);
	}
});
