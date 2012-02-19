adventurio.views.creator.BrowseStory = Backbone.View.extend({
	el : $('#creator_stories_story-browse'),
	initialize : function() {
		// hack, otherwise changePage throws exception
//		$().ready($.proxy(this.render, this));
//		return this.render();
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
		this.renderTemplate(adventurio.templates.listviews.Browse.compile(templateContextVariables), "browse story blabla");
		
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
	},
	renderTemplate : function(htmlContent, headerTitle){
		$('[data-role="content"]', this.el).html(htmlContent);
//		.trigger("create");
//		$("ul", this.el).listview('refresh');
		$("ul", this.el).trigger("create");
		$('h1', this.el).text(headerTitle);
		$.mobile.changePage("#"+this.el.id, {
			transition : 'slideup',
			reverse : false,
			changeHash : false
		});
	}
});