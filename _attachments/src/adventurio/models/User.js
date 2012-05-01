adventurio.models.User = new (Backbone.Model.extend({
	initialize : function() {
		console.log("initialized user model");
	},
	defaults : {
		"name" : "guest"  
	},
	isAuthenticated: function(){
		return this.get("name") !== this.defaults.name;
	},
	login : function(name, password) {
		$.couch.login({
			'name' : name,
			'password' : password,
			success : $.proxy(this.checkLogin, this)
		});
	},
	checkLogin: function(response) {
		$.couch.session({
			success : $.proxy(this.setCurrentUser, this)
		});
	},
	setCurrentUser : function(response){
		var currentUser = response.userCtx;
		this.set({name :  currentUser.name});
	},
	logout : function() {
		$.couch.logout({
			success : function() {
				this.isAuthenticated = false;
			}
		});
	},
	signup : function(name, password) {
		$.couch.signup({
			'name' : name,
			'password' : password
		}, password, {
			success : function() {
				$proxy(this.login(name, password), this);
			}
		});
	},
}));