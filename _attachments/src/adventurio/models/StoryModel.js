adventurio.models.StoryModel = Backbone.Model.extend({ // Backbone.DeepModel.extend({
	initialize : function() {
		this.on('change', this.notifySingleton, this);
	},
	defaults : {
		levels : [{
			vPos : 1,
			pages : [{
				hPos : 1,
				header : {
					value : "Welcome to my new story!"
				},
				linkPageDecisions : [{
					pos: 1,
					vPos : 2,
					hPos : 1,
					value : "Go left"
				},{
					pos : 2,
					vPos : 2,
					hPos : 2,
					value : "Go right"
				}],
				fields : [
				 {
					pos : 1,
					type : "text",
					value : "<h1>Please enter your name:</h1>"
				},{
					pos : 2,
					type : "textfield",
					title : "Your name",
					value : "Your name"
				},{
					pos : 3,
					type : "text",
					value : "You're in a forest, everything is dark. What do you want to do next?"
				},
				]
			}]
		}]
	},
	attributes : {
		
		_id : {},
		_rev : {},
		copyValuesToSingletonNeeded : true,
	},
	getModelPagePath : function(vPos, hPos){
		return this.get("levels")[vPos-1].pages[hPos - 1];
	},
	getModelFieldsPath : function(vPos, hPos){
		// return "levels."+(vPos-1)+".pages."+(this.options.parameter.hPos-1)+"fields";
		var getModelPagePath = this.getModelPagePath(vPos, hPos);
		return getModelPagePath.fields;
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
