adventurio.views.creator.Login = adventurio.views.superClasses.BasicDialog.extend({
	id : "page_creator_login",
	model : adventurio.models.User,
	getSpecificTemplateValues : function(){
		return {
			storyHeader : "Login"
		}
	},
	events : {
		"click a[type='submit']" : "login",
		"click a[type='cancel']" : "logout"
	},
	login : function(clickEvent) {
		clickEvent.preventDefault();
		
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
	logout : function(clickEvent){
		clickEvent.preventDefault();
		this.model.logout();
	},
	onSuccessfulValidation : function(){
		
	}
});
