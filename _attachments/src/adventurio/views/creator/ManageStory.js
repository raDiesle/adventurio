adventurio.views.creator.ManageStory = adventurio.views.superClasses.Basic.extend({
	el : "#creator_stories_storyid",
	initialize : function() {
		$().ready($.proxy(this.render, this));
	},
	events : {
		// "click a" : "redirectPage"
	},
	render : function() {
		var context = {
			menuObjects : {
				header : locale.creator.stories.singleStory.menu.header,
				menu :[ {
					route : "creator/stories/" + this.model.get('_id') + "?edit",
					entry : locale.creator.stories.singleStory.menu.entry.editStory
				},
				{
					route : "creator/stories/new",
					entry : locale.creator.stories.singleStory.menu.entry.builtStory
				},
				{
					route : 'creator/stories/' + this.model.get('_id') + '/1',
					entry : locale.creator.stories.singleStory.menu.entry.browseStory
				}
				]
			}
		};
		this._super("render", [adventurio.templates.menus.Simple.compile(context), "manage title"]);
	}
	// ,redirectPage : function(event) {
		// var dataUrl = $(event.currentTarget).attr("data-identity");
		// adventurio.routers.MainRouter.singleton.navigate(dataUrl, {trigger: true});
	// }
});