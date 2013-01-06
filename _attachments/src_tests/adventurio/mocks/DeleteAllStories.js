describe("No Test, just for creating mock data", function() {
    it('Deletes all stories', function() {

        adventurio.models.User.on('change', createMocks, this);
        adventurio.models.User.login("simpleUser", "password");



    });
});
