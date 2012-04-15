adventurio.views.reader.Stories = adventurio.views.superClasses.Basic.extend({
	el : $('#mainpage'),
	initialize : function() {
		this.collection.on('reset', this.render, this);
		this.collection.fetch();
	},
	render : function(collection, response) {
		console.log("mainpage was renedered");

		// data = adventurio.mocks.listStories;
		// adventurio.collections.StoriesCollection.singleton = new adventurio.collections.StoriesCollection;
		// adventurio.collections.StoriesCollection.singleton.fetch({
			// success : this.showStories
		// });
		var context = {
			storyObjects : collection.toJSON()
		};

		var html = adventurio.templates.listviews.SimpleList.compile(context);
		this._super("render", [html, I18n.t("index.header")]);
	},
	events : {
		"click .viewStoryLink" : "viewStory"
	},
	showStories : function(collection, response) {

		var context = {
			storyObjects : collection.toJSON()
		};

		var html = adventurio.templates.listviews.SimpleList.compile(context);

		// this.$("#listedStories").html(html);
		// try{
		 // $("#listedStories").listview("refresh");
		// }catch(e){
			// console.log("Error occurred" + e);
		// }
		 
		 // $.mobile.changePage("#mainpage", {
			// transition : 'slideup',
			// reverse : false,
			// changeHash : false
		// });
		
		this._super("render", [html, I18n.t("reader.Index.browseStories")]);
	},
	viewStory : function(clickEvent) {
		// var dataUrl = $(e.currentTarget).attr("data-url");
		var dataUrl = $(clickEvent.currentTarget).attr("data-identity");
		// if(dataUrl != null) {
		// dataUrl

		location.hash = "reader/stories" + dataUrl;
		// adventurio.routers.MainRouter.navigate
		// }

		// $.mobile.changePage("index.html#singleStory");
	}
});

// var adventurio_views_ShowStories = Backbone.View.extend({
// el : $('#showStories'),
// render : function(event) {
// var compiled_template = _.template($("#showStories-template").html());
// this.el.html(compiled_template(this.model.toJSON()));
// return this;
// },
// events : {
//
// }
// });