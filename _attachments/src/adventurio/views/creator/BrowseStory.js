adventurio.views.creator.BrowseStory = adventurio.views.superClasses.Basic.extend({
	id : 'page_creator_stories_story_browse',
	initialize : function() {
		$('input', this.el).val(this.options.parameter.verticalFrom);
		this.model.on('change', this.render, this);
		this.model.lazyFetch();
	},
	getTemplateID : function(){
		return "template_page_creator_stories_story_browse";
	},
	getSpecificTemplateValues : function(){
		return {
			headerTitle : "Browse Story",
			pages : this.model.get("levels")[this.options.parameter.verticalFrom - 1].pages,
			id : this.model.id,
			vPos : this.options.parameter.verticalFrom
		};
	},
	events : {
		'change input' : 'changeValue'
	},
	changeValue : function(event) {
		var position = event.currentTarget.value;
		var factor = 2;
		location.hash = "creator/stories/" + this.model.get('_id') + "/" + position;
	}
});
