adventurio.views.creator.Stories = adventurio.views.superClasses.Basic.extend({
	el : $('#page_creator_stories'),
	initialize : function() {
		this.collection.on('reset', this.render, this);
		this.collection.fetch();
	},
	render : function(collection, response){
		var context = {
			visitEntryPrefix : "creator/stories/",	
			storyObjects : this.collection.toJSON()
		};
		this._super("render", [adventurio.templates.listviews.SimpleList.compile(context), "list creator stories"]);
	},
	events : {
	},
});

