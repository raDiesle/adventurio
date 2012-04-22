adventurio.views.superClasses.Basic = Backbone.View.extend({
	render : function(htmlContent, headerTitle, options){
		options = options || {};
		var role = typeof options['role'] == 'undefined' ? "page" : options['role']; 
		
		$content = $('[data-role="content"]', this.el);
		$content.html(htmlContent);

		var firstTimeRendered = !$content.hasClass('ui-content');

		$('h1', this.el).text(headerTitle);
		$.mobile.changePage("#"+this.el.id, {
			transition : 'slideup',
			reverse : false,
			changeHash : false,
			role : role
			 // ,reloadPage : true
		});
	
		if(!firstTimeRendered){
			$content.trigger("create");
		}
		
		 // var $listview = $("ul", $content); // .first()
		 // var wasAlreadyRenderedByJQM = $listview.hasClass('ui-listview') 
		 // if (!wasAlreadyRenderedByJQM) {
			        // $listview.listview();
	    // }

		// var hasListview = typeof options['hasListview'] == 'undefined' ? false : options['hasListview'];
		// if(hasListview){
			 // $listview.hasClass('ui-block-b') || || $listview.hasClass(".ui-body-c")
				 	// try{
				        // $listview.listview('refresh');
				 	// }catch(ExceptionHackForBackButton){ /*do nothing*/}
				  // });
		        // this.el.trigger('create');
	}
});