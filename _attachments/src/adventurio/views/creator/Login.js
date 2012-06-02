adventurio.views.creator.Login = adventurio.views.superClasses.Basic.extend({
	id : "page_creator_login",
	role : "dialog",
	model : adventurio.models.User,
	getSpecificTemplateValues : function(){
		return {
			storyHeader : "Login"
		}
	},
	events : {
		"click a[type='submit']" : "login",
		"click a[type='reset']" : "logout"
	},
	login : function() {
		var serializedJsonForm = $("form", this.el).first().serializeJSON();

		this.model.login(serializedJsonForm.username, serializedJsonForm.password);
		this.model.on("change", function() {
			if(this.model.isAuthenticated()) {
				// window.history.back();
				history.go(-1);
				console.log("is authenticated");
			}
		}, this)
	},
	logout : function(){
		this.model.logout();
	}
});
