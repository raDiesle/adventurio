adventurio.views.creator.Login = adventurio.views.superClasses.Basic.extend({
	el : ('#page_creator_login'),
	model : adventurio.models.User,
	initialize : function() {
		$().ready($.proxy(this.render, this));
	},
	render : function(event) {
		this._super("render", [adventurio.templates.creator.Login.compile({}), "Story header", {
			'role' : 'dialog'
		}]);
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
