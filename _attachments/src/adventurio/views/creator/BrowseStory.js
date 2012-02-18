adventurio.views.creator.BrowseStory = Backbone.View.extend({
	el : $('#creator_stories_story-browse'),
	initialize : function() {
		// hack, otherwise changePage throws exception
		$().ready($.proxy(this.render, this));
//		return this.render();
	}
	,
	render : function(event){
		var templateContextVariables = {
				elements : [{
					_id : "meine id",
					header : "eine Page",
					description : "Beschreibung"	
				}]
		};
		this.renderTemplate(adventurio.templates.listviews.Browse.compile(templateContextVariables), "browse story blabla");
		$.mobile.changePage("#"+this.el.id, {
			transition : 'slideup',
			reverse : false,
			changeHash : false
		});
	return this;
	},
	test : function(){
		
	}
	,
	renderTemplate : function(htmlContent, headerTitle){
		$('[data-role="content"]', this.el).html(htmlContent);
//		.trigger("create");
//		$("ul", this.el).listview('refresh');
		$("ul", this.el).trigger("create");
		$('h1', this.el).text(headerTitle);
	}
});