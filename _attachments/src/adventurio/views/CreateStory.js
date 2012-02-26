var createStory_template = null;

adventurio.views.CreateStory = adventurio.views.superClasses.Basic.extend({

	el : $('#createstory'),
	initialize : function() {
		$().ready($.proxy(this.render, this)); // hack
	},
	render : function(event) {
		this._super("render", [adventurio.templates.creator.CreateStory.compile({}), "Story header"]);
	},
	events : {
		"click .submit" : "createStory",
	},
	createStory : function(event) {
		var storyToBeCreated = $("form", this.el).serializeJSON();
		storyToBeCreated.user = "simpleUser";
		var defaultGetStartedPage = storyToBeCreated.pages = [{
			vPos : 1,
			fields : [{
				name : "spielername",
				hPos : 1,
				type : "text",
				title : "Please enter whatever",
				value : {}
			}, {
				name : "StoryDescription",
				hPos : 2,
				type : "text",
				title : "Please enter whatever",
				value : {}
			}]
		}];
		
		var storyModelToSave = new adventurio.models.StoryModel(storyToBeCreated);
		var newStoryModel = storyModelToSave.save(storyModelToSave, {
			success : this.createPage,
			error : this.errorHandling
		});
	},
	createPage : function(model, response) {
		//location.hash = "creator/stories" + "/" + model.toJSON()._id + "/1/1";
		
	},
	errorHandling : function(model, response) {
		alert("Could not save");
	}
});
