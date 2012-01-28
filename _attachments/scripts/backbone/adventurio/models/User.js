adventurio.models.User = Backbone.Model.extend({
	isAuthenticated : false,
	name : '',
	initialize : function() {

	},
	login : function(name, password) {
		$.couch.login({
			'name' : name,
			'password' : password,
			success : function(response) {
				$.couch.session({
					success : function(response) {
						var currentUser = response.userCtx;
						this.name = currentUser.name;
						this.isAuthenticated = true;
					}
				});
			}
		});
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
			'name' : name
		}, password, {
			success : function() {
				this.login(name, password);
			}
		});
	},
});