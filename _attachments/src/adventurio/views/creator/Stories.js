adventurio.views.creator.Stories = adventurio.views.superClasses.Basic.extend({
	id : 'page_creator_stories',
	initialize : function() {
		this.collection.on('reset', this.render, this);
		this.collection.fetch();
	},
	getSpecificTemplateValues : function(){
		return {
			visitEntryPrefix : "creator/stories/",	
			storyObjects : this.collection.toJSON()
			};		
	},
	render : function(collection, response){
		this._super("render", ["list creator stories"]);
	},
	events : {
	},
});

