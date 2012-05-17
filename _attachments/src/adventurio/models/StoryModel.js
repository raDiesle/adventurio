adventurio.models.StoryModel = Backbone.Model.extend({ // Backbone.DeepModel.extend({
	initialize : function() {
		this.on('change', this.notifySingleton, this);
	},
	attributes : {
		_id : {},
		_rev : {},
		copyValuesToSingletonNeeded : true,
	},
	getModelFieldsPath : function(vPos, hPos){
		// return "levels."+(vPos-1)+".pages."+(this.options.parameter.hPos-1)+"fields";
		return this.get("levels")[vPos-1].pages[hPos - 1].fields
	},
	getModelFieldValuePath : function(vPos, hPos, fieldPos){
		// return getModelFieldsPath(vPos, hPos) + "."+fieldPos+".value";
		var getModelFieldPath = this.getModelFieldPath(vPos,hPos, fieldPos);
		return getModelFieldPath.value;
	},
	getModelFieldPath : function(vPos, hPos, fieldPos){
		// return getModelFieldsPath(vPos, hPos) + "."+fieldPos+".value";
		var modelFieldsPath = this.getModelFieldsPath(vPos, hPos);
		return modelFieldsPath[fieldPos-1];
	},
	setModelFieldValue : function(vPos, hPos, fieldPos, newValue){
		// return getModelFieldsPath(vPos, hPos) + "."+fieldPos+".value";
		return this.get("levels").get(vPos-1).get("pages").get(hPos-1).get("fields").set({value : newValue});
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
				fields : [
				 {
					name : "header",
					pos : 1,
					type : "text",
					title : "Welcome to our story",
					value : "Welcome to our story. <h2>Please enter your name:</h2>"
				},{
					name : "spielername",
					pos : 2,
					type : "textfield",
					title : "Your name",
					value : "Your name"
				},{
					name : "StoryDescription",
					pos : 3,
					type : "text",
					title : "Please enter whatever",
					value : "You're in a forest, everything is dark. What do you want to do next?"
				},{
					name : "linkPage",
					type : "linkPage",
					vPos : 3,
					hPos : 8,
					value : "You're in a forest, everything is dark. What do you want to do next?"
				},
				
				]
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
	// save : function(){
		
		 // Backbone.Model.prototype.set.apply(this, this.model.toJSON());
	// },
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
