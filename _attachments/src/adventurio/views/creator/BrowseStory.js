adventurio.views.creator.BrowseStory = adventurio.views.superClasses.Basic.extend({
	el : $('#creator_stories_story-browse'),
	initialize : function() {
		// hack, otherwise changePage throws exception
//		$().ready($.proxy(this.render, this));
		console.log(this.options.parameter.verticalFrom + "_"+
		this.options.parameter.verticalTo);
		$('input', this.el).val(this.options.parameter.verticalFrom); 
		this.collection.on('reset', this.render, this);
		this.collection.fetch();
	}
	,
	render : function(){
		var templateContextVariables = {
				elements : this.collection.toJSON()
		};
		this._super("render", [adventurio.templates.listviews.Browse.compile(templateContextVariables), "Browse Story"]);
	return this;
	},
	events : {
		'change input' : 'changeValue'
	},
	changeValue : function(event){
		var position = event.currentTarget.value;
		var factor = 2; // (position*factor) ((position*factor)+factor
		
		location.hash = "creator/stories/"+this.model.get('_id')+"/"+position;
		this.collection.models
	}
});