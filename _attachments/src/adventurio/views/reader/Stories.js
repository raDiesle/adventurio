adventurio.views.reader.Stories = adventurio.views.superClasses.Basic.extend({
	el : $('#mainpage'),
	initialize : function() {
		this.collection.on('reset', this.render, this);
		this.collection.fetch();
	},
	render : function(collection, response) {
		var context = {
			visitEntryPrefix : 'reader/stories/',
			storyObjects : collection.toJSON()
		};

		var html = adventurio.templates.listviews.SimpleList.compile(context);
		this._super("render", [html, I18n.t("index.header")]);
	},
	events : {
	},
	showStories : function(collection, response) {

		var context = {
			storyObjects : collection.toJSON()
		};

		var html = adventurio.templates.listviews.SimpleList.compile(context);
		this._super("render", [html, I18n.t("reader.Index.browseStories")]);
	}
});