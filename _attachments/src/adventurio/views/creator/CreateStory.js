adventurio.views.creator.CreateStory = adventurio.views.superClasses.Validateable.extend({
	id : "page_creator_CreateStory",
	getHeaderTitle : function(){
		return "Create new Story";
	},
	model : adventurio.models.SingleStorySingleton,
	initialize : function() {
		//_.bindAll(this, 'render');
		// this.render();
		
		// $(this.el).on("click a[type='submit']", function(){
			// console.warn("submitted");
		// });
		
		$().ready($.proxy(this.render, this));
	},
	getSpecificTemplateValues : function(){
		if(adventurio.models.SingleStorySingleton.tempNew != undefined) {
			return adventurio.models.SingleStorySingleton.tempNew;
		}
		return {};
	},
	events : function(){
		return _.extend({
		// another event
		}, this.constructor.__super__.events);
	},
	onSuccessfulValidation : function() {
		var storyToBeCreated = $("form", this.el).serializeJSON();
		if(adventurio.models.User.isAuthenticated()) {
			storyToBeCreated.user = adventurio.models.User.attributes.name;
		}

		adventurio.models.SingleStorySingleton.tempNew = storyToBeCreated;

		this.model.save(storyToBeCreated, {
			success : function(model, response) {
				adventurio.routers.MainRouter.singleton.navigate("creator/stories/" + model.id + "/1/1", {
					trigger : true
				});
			}
		});
	}
});
