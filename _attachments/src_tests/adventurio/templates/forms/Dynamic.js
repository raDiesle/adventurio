describe("AppRouter routes", function() {
	describeUi("MAIN program", "/index.html", function() {

		it("Should compile the dynamic form template", function() {
			expect($("#templates_forms_dynamic")).toBeDefined();
			runs(function() {

				var context = [{
					type : 'text',
					label : 'welcome to the jungle'
				}];
				expect($("#templates_forms_dynamic")).toBeDefined();
				expect(adventurio.templates.forms.Dynamic.compile(context)).toBeDefined();
				
			});
		});
	});
});
