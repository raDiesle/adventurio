adventurio.templates.creator.Signup = null;

adventurio.views.creator.Signup = Backbone.View.extend({
	el: ('#creator_signup'),
	model: adventurio.models.UserSingleton,
	initialize : function() {
		// hack, otherwise changePage throws exception
		$().ready(this.render);
		// this.render();
	},
	render: function(event){
		$.mobile.changePage('#creator_signup', {transition: 'slideup',  role: "dialog", reverse: false, changeHash: false});
	},
	events : {
		"click .submitButton" : "signup"
	},
	signup : function(){
		var serializedJsonForm = $("#creator_signup form").first().serializeJSON();
		
		adventurio.models.UserSingleton.signup(serializedJsonForm.username, serializedJsonForm.password);
	}
	
});