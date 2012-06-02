adventurio.views.reader.Index = adventurio.views.superClasses.Basic.extend({
	id : "page_reader_Index",
	getSpecificTemplateValues : function(){
		return {
			headerTitle : I18n.t("index.header"),
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
				menu : [ 
					{
						route : "creator/stories/new",
						entry : I18n.t("creator.stories.newStory")
					},
					{
						route : "creator/stories",
						entry : I18n.t("reader.Index.manageStories")
					},
					{
						route : "creator/stories/new",
						entry : I18n.t("reader.Index.continueEditStory")
					} 
				]
			} ]
		};
	}
});