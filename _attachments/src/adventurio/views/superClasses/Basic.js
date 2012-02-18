adventurio.views.superClasses.Basic = Backbone.View.extend({
	changePage : function(){
		$.mobile.changePage("#"+this.el.id, {
			transition : 'slideup',
			reverse : false,
			changeHash : false
		});
	}
});