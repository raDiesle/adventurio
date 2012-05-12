adventurio.views.creator.CreateStory = adventurio.views.superClasses.Basic.extend({
	el : $('#page_creator_stories_new'),
	model : adventurio.models.SingleStorySingleton,
	initialize : function() {
		// $('#siteSelector').live('pageshow',function(){ validate()
		// this._super("why");
		$().ready($.proxy(this.render, this));
	},
	render : function(event) {
		this._super("render", [adventurio.templates.creator.Story.compile({}), "Story header"]);
		this.constructor.__super__.addValidationHandler.apply(this, []);
		// this._super("addValidationHandler");
	},
	events : {
		"click a[data-theme='b']" : "validateForm",
	},
	validateForm : function(event) {
		event.preventDefault();
		$.proxy($("#createstory_form", this.el).submit(), this);
	},
	// create story
	onSuccessfulValidation : function() {

		var storyToBeCreated = $("form", this.el).serializeJSON();

		if(adventurio.models.User.isAuthenticated) {
			storyToBeCreated.user = adventurio.models.User.attributes.name;
		}

		this.model.save(storyToBeCreated, {
			success : function(model, response) {
				adventurio.routers.MainRouter.singleton.navigate("creator/stories/" + model.get("id") + "/1/1", {
					trigger : true
				});
			}
		});
	}
});
