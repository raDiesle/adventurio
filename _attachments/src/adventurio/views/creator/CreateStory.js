adventurio.views.creator.CreateStory = adventurio.views.superClasses.Basic.extend({
	id : "page_creator_CreateStory",
	model : adventurio.models.SingleStorySingleton,
	initialize : function() {
		//_.bindAll(this, 'render');
		// this.render();
		$().ready($.proxy(this.render, this));
	},
	getSpecificTemplateValues : function(){
		if(adventurio.models.SingleStorySingleton.tempNew != undefined) {
			return adventurio.models.SingleStorySingleton.tempNew;
		}
		return {};
	},
	render : function(event) {
		this._super("render", ["Story header"]);
		$.proxy(this.constructor.__super__.addValidationHandler.apply(this, []), this);
		return this;
	},
	events : {
		"click a[type='submit']" : "validateForm",
	},
	validateForm : function(event) {
		event.preventDefault();
		$.proxy($("form", this.el).submit(), this);
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
