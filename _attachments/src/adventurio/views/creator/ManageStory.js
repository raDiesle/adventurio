adventurio.views.creator.ManageStory = adventurio.views.superClasses.Basic.extend({
	id : "page_creator_stories_storyid",
	getSpecificTemplateValues : function(){
		return {
			headerTitle : "Manage Story",
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
	}
});