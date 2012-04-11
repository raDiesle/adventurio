describe("Spielwiese test UI code", function() {
	// /adventurio/_design/adventurio/
	describeUi("Spielwiese", "/spielwiese.html", function() {

		it("Should load ui and reuse in tests", function() {
			console.log(($("#anycontent")));
			// expect($("#anycontent").length).toBe(1);
			runs(function() {
				// expect($("#anycontent")).toBeDefined();
				// expect($("#anycontentNOTEXISTING")).toBeDefined();
			});
		});
	});
});
