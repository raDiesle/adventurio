describe("Create new Story Model", function() {

	it('check for access', function() {
		adventurio.routers.MainRouterSingleton.get().navigate("creator/stories/new", {trigger : true});
		runs(function(){
			var $storyName = ("#editStory_storyName",adventurio.views.CreateStory.singleton.el);
			var currentName = "Balu der Bär";
			$storyName.html(currentName);
			expect($storyName.html()).toBe(currentName);				
		});
	});
});