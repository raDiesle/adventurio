adventurio.views.superClasses.Basic = Backbone.View.extend({
	render : function(htmlContent, headerTitle, options){
		options = options || {};
		var role = typeof options['role'] == 'undefined' ? "page" : options['role']; 
		
		$('[data-role="content"]', this.el).html(htmlContent);

		// var hasListview = typeof options['hasListview'] == 'undefined' ? false : options['hasListview'];
		// if(hasListview){
			 $("ul", this.el).first().listview();
		// }
		
		$('h1', this.el).text(headerTitle);
		$.mobile.changePage("#"+this.el.id, {
			transition : 'slideup',
			reverse : false,
			changeHash : false,
			role : role
		});
	}
});