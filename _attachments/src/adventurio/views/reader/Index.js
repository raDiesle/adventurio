adventurio.templates.reader.Index = null;

adventurio.views.reader.Index = Backbone.View.extend({
	el:('#reader_index'),
	initialize : function(){
		// hack, otherwise changePage throws exception
		$().ready(this.render);
//		 return this;
	},
	render : function(){
//		if(adventurio.templates.reader.Index === null) {
//			adventurio.templates.reader.Index = $("#reader_index_template").html();
//		}
//		
//		var template = Handlebars.compile(adventurio.templates.reader.Index);
//		var context = {};
//		
//		var html = template(context);
//
//		$("#reader_index .content").first().html(html).trigger("create");
//		$("#reader_index .title").first().text(context.storyName);
		
		$.mobile.changePage('#reader_index', {transition: 'slideup',  role: "dialog", reverse: false, changeHash: false});
	}
});