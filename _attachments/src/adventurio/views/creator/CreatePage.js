var createPage_template = null;

adventurio.views.CreatePage = Backbone.View.extend({
	
	el: $('#createpage'),
	initialize: function(){
		console.log(this.model.toJSON()._id);
		this.render();
	},
	render : function(){
		var context = {};
		this.renderTemplate(adventurio.templates.forms.Dynamic.compile(context));
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