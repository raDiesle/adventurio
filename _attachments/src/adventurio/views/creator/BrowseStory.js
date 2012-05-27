adventurio.views.creator.BrowseStory = adventurio.views.superClasses.Basic.extend({
	id : 'page_creator_stories_story_browse',
	initialize : function() {
		$('input', this.el).val(this.options.parameter.verticalFrom);
		// this.collection.on('reset', this.render, this);
		// this.collection.fetch();
		this.model.on('change', this.render, this);
		this.model.lazyFetch();
	},
	getSpecificTemplateValues : function(){
		return {
			// elements : this.collection.toJSON()
			pages : this.model.get("levels")[this.options.parameter.verticalFrom - 1].pages,
			id : this.model.id,
			vPos : this.options.parameter.verticalFrom
		};
	},
	render : function() {
		this._super("render", ["Browse Story"]);
		return this;
	},
	events : {
		'change input' : 'changeValue'
	},
	changeValue : function(event) {
		var position = event.currentTarget.value;
		var factor = 2;
		// (position*factor) ((position*factor)+factor
		location.hash = "creator/stories/" + this.model.get('_id') + "/" + position;
		// this.collection.models
	}
});
