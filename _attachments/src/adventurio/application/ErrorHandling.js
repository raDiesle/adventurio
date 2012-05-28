/* Handler to redirect to login, if needed */
$(document).ajaxError(function(event, jqXHR, ajaxSettings, thrownError) {
	if(thrownError === "Unauthorized" || thrownError === "Forbidden") {
		adventurio.routers.MainRouter.singleton.navigate("creator/login", {
			trigger : true
		});
	}
});

/* Catch js errors to not crash application - not working, yet */

if( doExecutionHandling = false) {
	$(window).error(function(errorMessage, fileName, lineNumber) {
		console.log("error occured and logged");
	});

	window.onerror = fehler();

	function fehler(msg, name, ln) {
		console.log("log error to db in the future");
	}

}