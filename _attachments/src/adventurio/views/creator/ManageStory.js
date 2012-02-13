adventurio.templates.creator.ManageStory = null;

adventurio.views.creator.ManageStory = Backbone.View.extend({
	
	initialize : function() {
		// hack, otherwise changePage throws exception
		$().ready($.proxy(this.render, this));
//		 _.bindAll(this, "render");
	},
	events : {
		"click a" : "redirectPage"
	},
	render : function() {
		if (adventurio.templates.creator.ManageStory === null) {
			adventurio.templates.creator.ManageStory = $("#creator_stories_storyId_template").html();
		}
		//		
		var template = Handlebars.compile(adventurio.templates.creator.ManageStory);
		var context = {
			editStory : {
				header : locale.creator.stories.singleStory.menu.header,
				menu :  {
					route : "creator/stories/"+this.model.get('_id')+ "?edit",
					entry : locale.creator.stories.singleStory.menu.entry.editStory
				}
			},
			builtStory : 
				{
					route : "creator/stories/new",
					entry : locale.creator.stories.singleStory.menu.entry.builtStory
				}
		};
		//		
		var html = template(context);
		//
		try{
			$("ul", this.el).first().html(html).listview("refresh");
		}catch(alreadyRendered){
		}
		try{
			$("input", this.el).slider('refresh');
		}catch(alreadyRenedered){
		}
		
		$(".title", this.el).first().text("WELCOME");

		$.mobile.changePage('#creator_stories_storyid', {
			transition : 'slideup',
			role : "page",
			reverse : false,
			changeHash : false
		});
		
		return this;
	},
	redirectPage : function(event) {
		var dataUrl = $(event.currentTarget).attr("data-identity");
		location.hash = dataUrl;

	}
});