adventurio.views.creator.CreateStory = adventurio.views.superClasses.Basic.extend({
	el : $('#page_creator_stories_new'),
	model : adventurio.models.SingleStorySingleton,
	initialize : function() {
		// $('#siteSelector').live('pageshow',function(){ validate()
		// this._super("why");
		$().ready($.proxy(this.render, this));
	},
	render : function(event) {
		var templateContext = this.restoreContextBeforeAuthentication();

		this._super("render", [adventurio.templates.creator.CreateAndEditStory.compile(templateContext), "Story header"]);
		this.constructor.__super__.addValidationHandler.apply(this, []);
		// this._super("addValidationHandler");
	},
	events : {
		"click a[type='submit']" : "validateForm",
	},
	restoreContextBeforeAuthentication : function() {
		if(adventurio.models.SingleStorySingleton.tempNew != undefined) {
			return adventurio.models.SingleStorySingleton.tempNew;
		}
		return {};
	},
	validateForm : function(event) {
		event.preventDefault();
		$.proxy($("form", this.el).submit(), this);
	},
	// create story
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
