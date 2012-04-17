adventurio.views.reader.Index = adventurio.views.superClasses.Basic.extend({
	el : ('#reader_index'),
	initialize : function() {
		// hack, otherwise changePage throws exception
		$().ready($.proxy(this.render, this));
	},
	events : {
		"click a" : "redirectPage" //#reader_index
	},
	render : function() {
		var context = {
			menuObjects : [ {
				header : I18n.t("reader.header"),
				menu : [ {
					route : "reader/stories",
					entry : I18n.t("reader.Index.browseStories"),
				}, {
					route : "reader/stories",
					entry : I18n.t("reader.Index.continueReading")
				} ]
			}, {
				header : I18n.t("creator.header"),
				menu : [ {
					route : "creator/stories",
					entry : I18n.t("reader.Index.manageStories")
				},
				{
					route : "creator/stories/new",
					entry : I18n.t("reader.Index.continueEditStory")
				} ]
			} ]
		};
		//		
		var html = adventurio.templates.menus.Simple.compile(context);
		
		this._super("render", [html, I18n.t("index.header")]);
	},
	redirectPage : function(event) {
		var dataUrl = $(event.currentTarget).attr("data-identity");
		adventurio.routers.MainRouterSingleton.get().navigate(dataUrl, {trigger: true});

	}
});