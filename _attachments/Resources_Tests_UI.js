/*
 * Mapped with Jetty on lib/
 */
var libFolder = "lib_tests/";
var srcFolder = "src_tests/";
$LAB.setGlobalDefaults({
	AlwaysPreserveOrder : true,
	UseLocalXHR : true
}).script(libFolder + "jasmine-ui-1.0.1-SNAPSHOT.js")
//  Tests
.script(srcFolder + "adventurio/SpielwieseTest.js")
// .script(srcFolder + "adventurio/templates/forms/Dynamic.js")
//.script(srcFolder + "adventurio/views/reader/IndexIntegrTest.js")
// .script(srcFolder+"adventurio/models/StoryIntegrTest.js")

.wait(function() {
	jasmine.getEnv().addReporter(new jasmine.TrivialReporter());
	jasmine.getEnv().execute();
});
