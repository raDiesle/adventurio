adventurio.routers.MainRouter.singleton = new adventurio.routers.MainRouter();

$(function() {
	Backbone.history.start();
});

Backbone.couch_connector.config.global_changes = false;