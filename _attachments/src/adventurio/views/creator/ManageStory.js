adventurio.views.creator.ManageStory = adventurio.views.superClasses.Basic.extend({
	el : "#creator_stories_storyid",
	initialize : function() {
		$().ready($.proxy(this.render, this));
	},
	events : {
	},
	render : function() {
		var context = {
			menuObjects : {
				header : I18n.t("creator.stories.singleStory.menu.header"),
				menu :[ {
					route : "creator/stories/" + this.model.get('_id') + "?edit",
					entry : I18n.t("creator.stories.singleStory.menu.entry.editStory")
				},
				{
					route : "creator/stories/new",
					entry : I18n.t("creator.stories.singleStory.menu.entry.builtStory")
				},
				{
					route : 'creator/stories/' + this.model.get('_id') + '/1',
					entry : I18n.t("creator.stories.singleStory.menu.entry.browseStory")
				}
				]
			}
		};
		this._super("render", [adventurio.templates.menus.Simple.compile(context), "manage title"]);
	}
});