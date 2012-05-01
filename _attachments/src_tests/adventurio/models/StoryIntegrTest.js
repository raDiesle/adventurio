describe("Story Model database operations", function() {

	it('should save Story successful to database', function() {
		adventurio.routers.MainRouterSingleton.get().navigate("creator/stories/new", {trigger : true});
		
	});
	
});