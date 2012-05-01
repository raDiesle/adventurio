adventurio.models.StoryModel = Backbone.Model.extend({
	validation : {
		name : {required : true},
		id : {required : true},
		description : {required : true},
		tags : {required : true},
		language : {required : true}
	},
	attributes : {
		// rating : 
		// vertical : 
		// horizontal :  {required : true},
		// formItems : {required : true} 
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
	initialize : function(){
	
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
	fetch : function(possibleNewId){
		if(this.id === possibleNewId){
			this.trigger("change");
			return;
		}
		
		// this.set({"id" : id});
		this.id = possibleNewId;
		Backbone.Model.prototype.fetch.call(this, {async: false}); // async seems not to doesnt work
	},
	urlRoot: "/adventurio" // "/adventurio"
});

adventurio.models.SingleStorySingleton = new adventurio.models.StoryModel();
