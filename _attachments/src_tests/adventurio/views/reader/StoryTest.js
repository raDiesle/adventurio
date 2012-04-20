describe("Show Story information", function() {
  beforeEach(function() {

  });
  
  it("should properly initialize", function() {
	expect(adventurio.views.reader.singleton).toBe({});
	adventurio.routers.MainRouter.singleton.navigate("reader/stories/5bbb283105f08f47ba02597b8500027b", {trigger: true});
	expect(adventurio.views.reader.Story.singleton.model).toBeDefined();
	
  });
});