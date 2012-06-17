     $(document).on("mobileinit", function(){
        $.mobile.ajaxEnabled = false;
        $.mobile.hashListeningEnabled = false;
		$.mobile.page.prototype.options.degradeInputs.date = true;
		$.mobile.page.prototype.options.domCache = false;
        $.mobile.pushStateEnabled = false;
        $.mobile.defaultDialogTransition = "none";
        $.mobile.defaultPageTransition = "none";
        $.mobile.linkBindingEnabled = false; //-- will cause bug where window.hash = will stay empty
      });
      
 	// $(document).on("pagebeforechange", function(e, data){
		// // Only on url updates, non-jquery elements
		// if (typeof data.toPage === "string") {
		// e.preventDefault();
		// var url = $("<a/>").attr("href",data.toPage)[0].pathname; // Get our path
		// adventurio.routers.MainRouter.navigate(url, {trigger: true});
		// }
	// })
 	