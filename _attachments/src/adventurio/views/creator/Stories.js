adventurio.views.creator.Stories = adventurio.views.superClasses.Basic.extend({
	el : $('#creator_stories'),
	initialize : function() {
		this.collection.on('reset', this.render, this);
		this.collection.fetch();
	},
	render : function(collection, response){
		var context = {
				storyObjects : this.collection.toJSON()
		};

		var html = adventurio.templates.listviews.SimpleList.compile(context);
		this._super("render", [html, "list creator stories"]);
		// this.renderTemplate(html, "Stories");
		// return this;
	},
	events : {
		"click a" : "viewStory"
	},
	viewStory : function(e) {
		var dataUrl = $(e.currentTarget).attr("data-identity");
		location.hash = "creator/stories" + dataUrl;
	},
	renderTemplate : function(htmlContent, headerTitle){
		$('[data-role="content"]', this.el).html(htmlContent);
		// $('ul', this.el).trigger("create");
		// $("ul", this.el).listview('refresh');
		// $("ul", this.el).first().listview();
		// $("ul", this.el).trigger("create");
		$('h1', this.el).text(headerTitle);
		// $.mobile.changePage("#"+this.el.id, {
			// transition : 'slideup',
			// reverse : false,
			// changeHash : false
		// });
	}
});

