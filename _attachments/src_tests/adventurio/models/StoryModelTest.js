describe("Story Model operations", function() {

	it('should get and set deep model structure', function() {
		// adventurio.routers.MainRouterSingleton.get().navigate("creator/stories/new", {trigger : true});
		var story = new adventurio.models.StoryModel();
		
		var vPos = 1;
		var hPos = 2;
		var fieldPos = 3;
		
		var actualFieldsPath = story.getModelFieldsPath(vPos, hPos);
		var actualFieldValuePath = story.getModelFieldValuePath(vPos, hPos, fieldPos)
		
		// story.get() missing
		expect(actualFieldsPath).toBe(story.attributes.levels[0].pages[1].fields);
		expect(actualFieldValuePath).toBe("another example");
	});
	
});