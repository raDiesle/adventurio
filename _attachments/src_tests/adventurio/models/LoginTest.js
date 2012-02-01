describe("Example", function() {

	var onSuccess, request;

	beforeEach(function() {
		jasmine.Ajax.useMock();
		onSuccess = jasmine.createSpy('onSuccess');
	});
	it("should Login user", function() {

		// onSuccess = jasmine.createSpy('onSuccess');

		expect(adventurio.models.UserSingleton.isAuthenticated()).toBe(false);
		// adventurio.models.UserSingleton.login("testuser", "mypasswd");

		var response = ({
			"ok" : true,
			"name" : "simpleUser",
			"roles" : []
		});
		adventurio.models.UserSingleton.checkLogin(response);

		request = mostRecentAjaxRequest();

		request.response = '{"ok" : true,"userCtx" : {"name" : "simpleUser","roles" : []},"info" : {"authentication_db" : "_users","authentication_handlers" : [ "oauth", "cookie", "default" ],"authenticated" : "cookie"}}';

		expect(onSuccess).toHaveBeenCalled();

		expect(adventurio.models.UserSingleton.isAuthenticated()).toBe(true);

	});
});