describe("Story Model operations", function() {

    var story = "null";
    beforeEach(function () {
        story = new adventurio.models.StoryModel();
    }),

        it('should get and set deep model structure', function() {
		// adventurio.routers.MainRouterSingleton.get().navigate("creator/stories/new", {trigger : true});

		
		var vPos = 1;
		var hPos = 1;
		var fieldPos = 1;
		
		var actualFieldsPath = story.getModelFieldsPath(vPos, hPos);
        expect(actualFieldsPath.length).toBe(3);

		var actualFieldValuePath = story.getModelFieldValuePath(vPos, hPos, fieldPos);
		expect(actualFieldValuePath).toBe("<h1>Please enter your name:</h1>");
	});

    it('should create new default page', function() {
        var vPos = 1;
        var hPos = 1;

        var currentPageSize = story.getModelPagesPath(vPos).length;
        expect(currentPageSize).toBe(1);
        story.addNewDefaultPage(currentPageSize+1);
        var newPageSize = story.getModelPagesPath(vPos).length;
        expect(newPageSize).toBe(2);
    });
	
});