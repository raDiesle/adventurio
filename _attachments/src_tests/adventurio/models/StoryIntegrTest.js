describe("Story Model database operations", function() {

	it('should save Story successful to database', function() {
		var data = {name : "Arielle", description: "Ein Disney Film", tags : "disney", user:"david"};
		var storyModelReal = new adventurio.models.StoryModel(data);

		var newStoryModel = storyModelReal.save(storyModelReal, {
			success : function (result) {
			  console.log("success");
			},
			error : function(result){
				console.log("error");
			}
		});
	});
	
});