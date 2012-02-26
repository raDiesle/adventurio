adventurio.views.superClasses.Basic = Backbone.View.extend({
	render : function(htmlContent, headerTitle){
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