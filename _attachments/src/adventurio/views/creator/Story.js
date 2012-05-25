adventurio.views.creator.Story = adventurio.views.superClasses.Basic.extend({
	id : 'page_creator_stories_story',
	initialize : function(){
		this.model.on('change', this.render, this);
		this.model.lazyFetch();
	},
	getSpecificTemplateValues : function(){
		return this.model.toJSON();
	},
	render : function() {
		this._super("render", [this.model.get("name")]);
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
});
