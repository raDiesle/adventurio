adventurio.views.creator.CreateStory = adventurio.views.superClasses.Basic.extend({
	id : "page_creator_CreateStory",
	//el : $("#page_creator_CreateStory"),
	model : adventurio.models.SingleStorySingleton,
	initialize : function() {
		//_.bindAll(this, 'render');
		// this.render();
		$().ready($.proxy(this.render, this));
	},
	getSpecificTemplateValues : function(){
		return this.restoreContextBeforeAuthentication();
	},
	render : function(event) {
		this._super("render", ["Story header"]);
		return this;
		//this.constructor.__super__.addValidationHandler.apply(this, []);
	},
	events : {
		"click a[type='submit']" : "validateForm",
		"dblclick" : "test"
	},
	test : function(event){
		alert("doubleclicked");
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
