describe("Regex", function() {

	it('should replace \n with <br />', function() {
		var orginal = "this ts \n";
		var result = orginal.replace(/t/g, "A");
		expect(result).toBe("Ahis As \n");
		result = result.replace(/\n/g, "<br />");
		expect(result).toBe("Ahis As <br />");
		console.log(result);
	});
	it('should convert json to xhtml and way around', function() {
		var jsonElement = {
			"ul" : {
				"@data-role" : "listview",
				"@data-inset" : true,
				li : [{
					"span" : {
						"#text" : "#mytext",
						"@id" : "textid"
					},
				}, {
					div : {
						"@data-role" : "fieldcontain",
						"#text" : "mytext2" 
					}
				}]
			}
		};
		
		var actual = adventurio.utilies.Json.json2xml(jsonElement);
		var expected = '<ul data-role="listview" data-inset="true"><li><span id="textid">#mytext</span></li><li><div data-role="fieldcontain">mytext2</div></li></ul>'
		expect(actual).toBe(expected);
		
		actual = adventurio.utilies.Json.xml2json(adventurio.utilies.Json.parseXml(expected), "");
		// expected = element;
		expect(actual).toBe(jsonElement);
	});
	
	
	   function NormalizeAdjacentTextNodes () {
            var textContainer = document.getElementById ("textContainer");

            var textNode1 = document.createTextNode ("First text node.");
            var textNode2 = document.createTextNode ("Second text node.");

            textContainer.appendChild (textNode1);
            textContainer.appendChild (textNode2);

            alert ("Before normalizing, the textContainer element contains " + textContainer.childNodes.length + " text nodes.");

            textContainer.normalize ();

            alert ("After normalizing, the textContainer element contains " + textContainer.childNodes.length + " text node.");
            alert ("The contents of the text node are:\n" + textContainer.firstChild.data);

            textContainer.removeChild (textContainer.firstChild);
        }

        function NormalizeEmptyTextNodes () {
            var textContainer = document.getElementById ("textContainer");

            var emptyTextNode = document.createTextNode ("");
            textContainer.appendChild (emptyTextNode);

            textContainer.normalize ();

            if (textContainer.firstChild) {     // Internet Explorer
                alert ("The normalize method does not remove empty text nodes in your browser!");
                textContainer.removeChild (textContainer.firstChild);
            }
            else {
                alert ("The normalize method removes empty text nodes in your browser.");
            }
        }
	
});
