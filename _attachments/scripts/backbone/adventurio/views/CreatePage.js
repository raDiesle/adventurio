var createPage_template = null;

adventurio.views.CreatePage = Backbone.View.extend({
	
	el: $('#createpage'),
	initialize: function(){
		console.log(this.model.toJSON()._id);
		this.render();
	},
	render : function(){
		$("#createpage .storyname").text(this.model.toJSON()._id);
		
		$.mobile.changePage("#createpage", {transition: 'slideup', reverse: false, changeHash: false});
	}
});