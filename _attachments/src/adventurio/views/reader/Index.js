//adventurio.templates.menus.Simple = null;

adventurio.views.reader.Index = Backbone.View.extend({
	el : ('#reader_index'),
	initialize : function() {
		// hack, otherwise changePage throws exception
		$().ready(this.render);

		// return this;
	},
	events : {
		"click a" : "redirectPage" //#reader_index
	},
	render : function() {
//		if (adventurio.templates.menus.Simple === null) {
//			adventurio.templates.menus.Simple = ;
//		}
		//		
//		var template = Handlebars.compile($("#templates_menus_simple").html());
		var context = {
			menuObjects : [ {
				header : locale.reader.header,
				menu : [ {
					route : "reader/stories",
					entry : locale.reader.Index.browseStories,
				}, {
					route : "reader/stories",
					entry : locale.reader.Index.continueReading
				} ]
			}, {
				header : locale.creator.header,
				menu : [ {
					route : "creator/stories",
					entry : locale.reader.Index.manageStories
				},
				{
					route : "creator/stories/new",
					entry : locale.reader.Index.continueEditStory
				} ]
			} ]
		};
		//		
		var html = adventurio.templates.menus.Simple.compile(context);
		//
		$("#reader_index ul").first().html(html).listview("refresh");
		$("#reader_index .title").first().text("WELCOME");

		$.mobile.changePage('#reader_index', {
			transition : 'slideup',
			role : "dialog",
			reverse : false,
			changeHash : false
		});
	},
	redirectPage : function(event) {
		var dataUrl = $(event.currentTarget).attr("data-identity");
		location.hash = dataUrl;

	}
});