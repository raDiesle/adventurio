
var listAllStories_template = null;
adventurio.views.ShowStories = Backbone.View.extend({

			el : $('#mainpage'),
			initialize: function(){
				return this.render();
			},
			render : function(event) {
				console.log("mainpage was renedered");
				if(listAllStories_template === null){
					listAllStories_template = $("#listAllStories_template").html();
				}
				
				var template = Handlebars.compile(listAllStories_template);
				var data = data || {};
				data = adventurio.mocks.listStories;
				console.log(data.rows);
				var context = {
					storyObjects : data.rows
				};
				var html = template(context);
			
				// var compiled_template = _.template($("#showStories-template").html());
				// this.el.html(compiled_template(this.model.toJSON()));
				
				this.$("#listedStories").html(html);
				$("#listedStories").listview("refresh");
				
				
			},
			events : {

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
