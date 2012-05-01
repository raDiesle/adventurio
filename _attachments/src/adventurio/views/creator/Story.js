adventurio.views.creator.Story = new (adventurio.views.superClasses.Basic.extend({
	el : $('#page_creator_stories_story'),
	model : adventurio.models.SingleStorySingleton,
	initialize : function(){
		this.model.on('change', this.render, this);
	},
	updateModel : function(storyId) {
		this.model.fetch(storyId);
	},
	render : function(storyId) {
		this._super("render", [adventurio.templates.creator.Story.compile(this.model.toJSON()), this.model.get("name")]);
	},
	events : {
		"click .submitButton" : "editStory",
	},
	editStory : function(event) {

		if(this.model) {
			// can use error dialog instead and use usage of localstorage
			this.model.save({
				"name" : $("#editStory_storyName").val(),
				"description" : $("#editStory_description").val(),
				"tags" : $("#editStory_tags").val()
			}, {
				success : function() {
					location.hash = "creator/stories";
				},
				error : function() {
					console.log("error");
					$('#editstory').couchLogin();
				}
			});
		}
	}
}));
