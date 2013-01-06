
adventurio.views.creator.Signup = Backbone.View.extend({
	id: "creator_signup",
	model: adventurio.models.UserSingleton,
	events : {
		"click a[type='submit']" : "signup"
	},
	getSpecificTemplateValues : function(){
		headerTitle : "Signup"
	},
	signup : function(){
		var serializedJsonForm = $("#creator_signup form").first().serializeJSON();
		
		adventurio.models.UserSingleton.signup(serializedJsonForm.username, serializedJsonForm.password);
	}
	
});