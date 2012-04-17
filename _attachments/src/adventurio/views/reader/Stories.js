adventurio.views.reader.Stories = adventurio.views.superClasses.Basic.extend({
	el : $('#mainpage'),
	initialize : function() {
		this.collection.on('reset', this.render, this);
		this.collection.fetch();
	},
	render : function(collection, response) {

		var context = {
			storyObjects : collection.toJSON()
		};

		var html = adventurio.templates.listviews.SimpleList.compile(context);
		this._super("render", [html, I18n.t("index.header")]);
	},
	events : {
		"click .viewStoryLink" : "viewStory"
	},
	showStories : function(collection, response) {

		var context = {
			storyObjects : collection.toJSON()
		};

		var html = adventurio.templates.listviews.SimpleList.compile(context);
		this._super("render", [html, I18n.t("reader.Index.browseStories")]);
	},
	viewStory : function(clickEvent) {
		var dataUrl = $(clickEvent.currentTarget).attr("data-identity");
		adventurio.routers.MainRouterSingleton.get().navigate("reader/stories/" + dataUrl, {trigger: true});
	}
});