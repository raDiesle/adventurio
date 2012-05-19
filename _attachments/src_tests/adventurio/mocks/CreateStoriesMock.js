describe("No Test, just for creating mock data", function() {
	it('creates some stories', function() {
		
		adventurio.models.User.on('change', createMocks, this);
		adventurio.models.User.login("simpleUser", "trinity");

		
		
		// new adventurio.models.StoryModel().save({
			// name : "",
			// description : "",
			// tags : "",
			// language : ""
		// });
	});
	
	
	var createMocks = function(){
		new adventurio.models.StoryModel().save({
			name : "Peter Pan",
			description : "A story about a boy who doesn't want to become old",
			tags : "disney",
			language : "de",
			user : adventurio.models.User.get("name")
		});
	}
});
