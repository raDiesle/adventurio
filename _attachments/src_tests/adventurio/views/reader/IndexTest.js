describe("AppRouter routes", function() {
  beforeEach(function() {
    this.router = adventurio.routers.MainRouterSingleton;
    this.routeSpy = sinon.spy();
//    try {
//      Backbone.history.start({silent:true, pushState:true});
//    } catch(e) {}
//    	this.router.navigate("whatever");
  });
  
  it("fires the index route with a blank hash", function() {
    this.router.bind("route:index", this.routeSpy);
    this.router.navigate("reader/stories", true);
//    location.hash = "reader/stories";
    expect(this.routeSpy).toHaveBeenCalledOnce();
    expect(this.routeSpy).toHaveBeenCalledWith();
  });
});