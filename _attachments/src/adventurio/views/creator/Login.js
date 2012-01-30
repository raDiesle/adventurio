adventurio.templates.creator.Login = null;

adventurio.views.creator.Login = Backbone.View.extend({
	el: ('#creator_login'),
	model: adventurio.models.UserSingleton,
	initialize : function() {
		// hack, otherwise changePage throws exception
		$().ready(this.render);
		// this.render();
	},
	render: function(event){
		console.log("login rendered");
		if(adventurio.templates.creator.Login === null) {
			adventurio.templates.creator.Login = $("#creator_login_template").html();
		}
		
//		var template = Handlebars.compile(adventurio.templates.creator.Login);
		
		
//		$("#creator_login .content").first().couchLogin();
		$.mobile.changePage('#creator_login', {transition: 'slideup',  role: "dialog", reverse: false, changeHash: false});
	},
	events : {
		"click .submitButton" : "login"
	},
	login: function(){
		var serializedJsonForm = $("#creator_login form").first().serializeJSON();
		console.log(adventurio.models.UserSingleton.isAuthenticated());
		adventurio.models.UserSingleton.login(serializedJsonForm.username, serializedJsonForm.password);
		console.log(adventurio.models.UserSingleton.isAuthenticated());
	}
});
