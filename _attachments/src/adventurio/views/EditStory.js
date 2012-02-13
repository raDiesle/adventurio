var editStory_template = null;

adventurio.views.EditStory = Backbone.View.extend({

	el : $('#editstory'),
	initialize : function() {
		this.model.bind('change', this.render, this);
		this.model.fetch();
		// return this.render();
	},
	render : function(event) {
		console.log("edit story rendered");

		if(editStory_template === null) {
			editStory_template = $("#editStory_template").html();
		}

		var template = Handlebars.compile(editStory_template);
		var context = {};

		if(event != undefined && event.toJSON()) {
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
		$.mobile.changePage("#editstory", {
			transition : 'slideup',
			reverse : false,
			changeHash : false
		});

		return this;
	},
	events : {
		"click #submitButton" : "editStory",
	},

	editStory : function(event) {
		var storyModelReal = this.model;

		if(this.model) {
			// can use error dialog instead and use usage of localstorage
			storyModelReal.save({
				"name" : $("#editStory_storyName").val(),
				"description" : $("#editStory_description").val(),
				"tags" : $("#editStory_tags").val()
				// ,"user": "simpleUser"
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
