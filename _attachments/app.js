// Backbone.history.start();

Backbone.couch_connector.config.db_name = "adventurio";
Backbone.couch_connector.config.ddoc_name = "adventurio";
// If set to true, the connector will listen to the changes feed
// and will provide your models with real time remote updates.
Backbone.couch_connector.config.global_changes = false;