adventurio.models.StoryModel = Backbone.Model.extend({
	// validation : {
	// name : {required : true},
	// id : {required : true},
	// description : {required : true},
	// tags : {required : true},
	// language : {required : true}
	// },
	attributes : {
		copyValuesToSingletonNeeded : true,
		rules : {}
		// rating :
		// vertical :
		// horizontal :  {required : true},
		// formItems : {required : true}
	},
	settings : {
		validation : {
			rules : {
				name : "required",
				id : "required",
				description : "required",
				tags : "required",
				language : "required"
			}
		}
	},
	defaults : {
		pages : [{
			vPos : 1,
			fields : [{
				name : "spielername",
				hPos : 1,
				type : "text",
				title : "Please enter whatever",
				value : "an example"
			}, {
				name : "StoryDescription",
				hPos : 2,
				type : "text",
				title : "Please enter whatever",
				value : "another example"
			}]
		}]
	},
	initialize : function() {
		this.on('change', this.notifySingleton, this);
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
