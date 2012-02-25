describe(
		"Regex",
		function() {
			
			it('should replace \n with <br />', function() {
				var orginal = "this ts \n";
				var result = orginal.replace(/t/g, "A");
				expect(result) .toBe("Ahis As \n");
				result = result.replace(/\n/g, "<br />");
				expect(result).toBe("Ahis As <br />");
				console.log(result);
			});
		}
);