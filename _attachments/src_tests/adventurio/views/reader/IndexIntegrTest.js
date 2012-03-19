describe("Index Page, where main menu is displayed to navigate", function() {

	describeUi("MAIN program", "/index.html", function() {

  		function currentBaseUrl() {
            return window.location.pathname;
        }
 		
 		it("should allow access to default jasmine functions", function () {
 			console.log("runs again");
            expect(spyOn).toBeTruthy();
            expect(jasmine).toBeDefined();
        });

		it("Should visit browse stories of Reader", function() {
			console.log("before runs");
			runs(function() {
				console.log("running");
				 expect(currentBaseUrl()).toBe("/index.html");
				
				var browserStories_MenuTitle = $('a [data-role="reader/stories"]');

				simulate(browserStories_MenuTitle, 'click');

				// expect(Backbone.history.fragment).toBe("reader/stories");
			});
		});
	});
});
