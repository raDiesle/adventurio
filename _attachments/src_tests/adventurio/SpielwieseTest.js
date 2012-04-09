describe("Spielwiese test UI code", function() {
	describeUi("Spielwiese", "/adventurio/_design/adventurio/spielwiese.html", function() {

		it("Should load ui and reuse in tests", function() {
			console.log(($("#anycontent")));
			expect($("#anycontent").length).toBeDefined();
			runs(function() {
				expect($("#anycontent")).toBeDefined();
			});
		});
	});
});
