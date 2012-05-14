adventurio.models.StoryModel = Backbone.Model.extend({ // Backbone.DeepModel.extend({
	initialize : function() {
		this.on('change', this.notifySingleton, this);
	},
	attributes : {
		copyValuesToSingletonNeeded : true,
	},
	getModelFieldsPath : function(vPos, hPos){
		// return "levels."+(vPos-1)+".pages."+(this.options.parameter.hPos-1)+"fields";
		return this.get("levels")[vPos-1].pages[hPos - 1].fields
	},
	getModelFieldValuePath : function(vPos, hPos, fieldPos){
		// return getModelFieldsPath(vPos, hPos) + "."+fieldPos+".value";
		var modelFieldsPath = this.getModelFieldsPath(vPos, hPos);
		return modelFieldsPath[fieldPos-1].value;
	},
	settings : {
		validation : {
			rules : {
				name : {
					"required" : true,
					"noSpecialChars" : true
				},
				id : "required",
				description : "required",
				tags : "required",
				language : "required"
			}
		}
	},
	defaults : {
		levels : [{
			vPos : 1,
			pages : [{
				hPos : 1,
				fields : [{
					name : "header",
					pos : 1,
					type : "textfield",
					title : "Welcome to our story",
					value : "Welcome to our story"
				}, {
					name : "spielername",
					pos : 2,
					type : "text",
					title : "Please enter whatever",
					value : "an example"
				}, {
					name : "StoryDescription",
					pos : 3,
					type : "text",
					title : "Please enter whatever",
					value : "another example"
				}]
			}, {
				hPos : 2,
				fields : [{
					name : "header",
					pos : 1,
					type : "textfield",
					title : "Please enter your name",
					value : "Please enter your name"
				}, {
					name : "spielername",
					pos : 2,
					type : "text",
					title : "Please enter whatever",
					value : "an example"
				}, {
					name : "StoryDescription",
					pos : 3,
					type : "text",
					title : "Please enter whatever",
					value : "another example"
				}]
			}]
		}]
	},
	validationError : function(model, errs) {
		console.log("validation error");
	},
	// validate : function(attributes){
	// if(!adventurio.models.UserSingleton.get().isAuthenticated()){
	// adventurio.routers.MainRouterSingleton.get().navigate("creator/login",{trigger : true});
	// return "error";
	// }
	// },
	lazyFetch : function() {
		if(this.id === adventurio.models.SingleStorySingleton.id) {
			// || adventurio.models.SingleStorySingleton.id != undefined
			// copy values to this model
			this.set(adventurio.models.SingleStorySingleton.attributes);
			this.attributes.copyValuesToSingletonNeeded = false;
			this.trigger("change");
			return;
		}

		this.attributes.copyValuesToSingletonNeeded = true;
		this.fetch();
		// Backbone.Model.prototype.fetch.call(this, {async: false}); // async seems not to doesnt work
	},
	notifySingleton : function(story, response) {
		if(this.attributes.copyValuesToSingletonNeeded) {
			console.log("copied values to singleton");
			adventurio.models.SingleStorySingleton.set(story.attributes);
		}
	},
	urlRoot : "/adventurio" // "/adventurio"
});

adventurio.models.SingleStorySingleton = new adventurio.models.StoryModel();
adventurio.models.SingleStorySingleton.off("change", this.notifySingleton);
