describe("EditPageFormItem should initialize ", function() {
	it('Test, if singleton collection is working', function() {
		expect(adventurio.views.creator.EditPageFormItemOptionsWindow).toBeDefined();
		expect(adventurio.collections.StoryCollection.singleton).toBeUndefined();
	})

	it('Test, if model singleton is working', function(){
		var id= "5bbb283105f08f47ba02597b8500027b";
		adventurio.models.StoryModel.singleton = new adventurio.models.StoryModel({_id : id});

		var testedPropertyOfModel = "storyName";
		expect(adventurio.models.StoryModel.singleton.get(testedPropertyOfModel)).toBeUndefined();
		
		adventurio.models.StoryModel.singleton.fetch({
			success : showStory
		});
		
		waits(1000);
		// expect(showStory).wasCalledWith(arguments);
		// expect("bla").toBe("blub");
		expect(adventurio.models.StoryModel.singleton.get(testedPropertyOfModel)).toBeDefined();
		expect(adventurio.models.StoryModel.singleton.length).toBe(1);
		console.log("successful loaded data in test");
	})
	
	function showStory(collection, response){
		
	}
});
