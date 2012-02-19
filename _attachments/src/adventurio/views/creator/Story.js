adventurio.views.creator.Story = Backbone.View.extend({
	el : $('#creator_stories_story'),
	initialize : function() {
		this.model.on('change', this.render, this);
		this.model.fetch();
		// return this.render();
	},
	render : function() {
//		if(event != undefined && event.toJSON()) {
//			var json = toryToEdit.toJSON();
			var templateContextVariables = {
				storyId : this.model.get('_id'),
				storyDescription : this.model.get('description'),
				storyName : this.model.get('name'),
				storyTags : this.model.get('tags')
			};
//		}

		this.renderTemplate(adventurio.templates.forms.Story.compile(templateContextVariables), this.model.get('name'));
		$.mobile.changePage("#"+this.el.id, {
			transition : 'slideup',
			reverse : false,
			changeHash : false
		});
		return this;
	},
	renderTemplate : function(htmlContent, headerTitle){
		$('[data-role="content"]', this.el).html(htmlContent).trigger("create");
		$('h1', this.el).text(headerTitle);
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
