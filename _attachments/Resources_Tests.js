/*
 * Mapped with Jetty on lib/
 */
var libFolder = "lib_tests/"; 
var srcFolder = "src_tests/";
$LAB
 .setGlobalDefaults({AlwaysPreserveOrder :true, UseLocalXHR : true})
 .script(libFolder+"jasmine.js") // 1.1.0 http://pivotal.github.com/jasmine/download.html
 .script(libFolder+"jasmine-html.js")
 .script(libFolder+"sinon-1.3.1.js") // 1.3.1 http://sinonjs.org/
// .script(libFolder+"JasmineAdapter.js") // 1.1 https://github.com/ibolmo/jasmine-jstd-adapter/blob/master/src/JasmineAdapter.js
 .script(libFolder+"mock-ajax.js")// 23. September 2011 https://github.com/pivotal/jasmine-ajax/blob/master/lib/mock-ajax.js
 .script(libFolder+"jasmine-jquery.js")// 11. August 2011 https://github.com/velesin/jasmine-jquery/blob/master/lib/jasmine-jquery.js
 
//  Tests
 .script(srcFolder+"adventurio/models/LoginTest.js")
 .wait(function() {
      var jasmineEnv = jasmine.getEnv();
      jasmineEnv.updateInterval = 1000;

      var trivialReporter = new jasmine.TrivialReporter();

      jasmineEnv.addReporter(trivialReporter);

      jasmineEnv.specFilter = function(spec) {
        return trivialReporter.specFilter(spec);
      };

      var currentWindowOnload = window.onload;

//      window.onload = function() {
//        if (currentWindowOnload) {
//          currentWindowOnload();
//        }
        execJasmine();
//      };

      function execJasmine() {
        jasmineEnv.execute();
      }
    });
