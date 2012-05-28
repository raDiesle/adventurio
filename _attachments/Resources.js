var libFolder = "lib/"; 
var srcFolder = "src/";
var localeFolder = "locale/";
window.templates = {};

$LAB
 .setOptions({AlwaysPreserveOrder:true, UseLocalXHR : true})
 
 .script("ApplicationScope.js")
 .script(libFolder+"json2.js")
 .script(libFolder+"jquery-1.7.1.js") // http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js
 
 .wait(function() {
 	// $(document).on("pagebeforechange", function(e, data){
		// // Only on url updates, non-jquery elements
		// if (typeof data.toPage === "string") {
		// e.preventDefault();
		// var url = $("<a/>").attr("href",data.toPage)[0].pathname; // Get our path
		// adventurio.routers.MainRouter.navigate(url, {trigger: true});
		// }
	// })
 	
      $(document).bind("mobileinit", function(){
        $.mobile.ajaxEnabled = false;
        $.mobile.hashListeningEnabled = false;
		$.mobile.page.prototype.options.degradeInputs.date = true;
		$.mobile.page.prototype.options.domCache = false;
        $.mobile.pushStateEnabled = false;
        //$.mobile.linkBindingEnabled = false; //-- will cause bug where window.hash = will stay empty
      });
  })
 
 .script(libFolder+"jquery.mobile-1.1.0.js")
 .script(libFolder+"jquery.couch.js") // for signup november 2011 https://github.com/apache/couchdb/blob/master/share/www/script/jquery.couch.js
 .script(libFolder+"jquery.couch.app.js") // v 1.0.1 https://github.com/couchapp/couchapp/blob/master/couchapp/templates/vendor/couchapp/_attachments/jquery.couch.app.js
 .script(libFolder+"couch.js") // oktober 2011 https://github.com/apache/couchdb/blob/master/share/www/script/couch.js
 .script(libFolder+"sha1.js") // couchdb
 .script(libFolder+"underscore.js")// 1.3.1 http://documentcloud.github.com/underscore/underscore.js
 .script(libFolder+"backbone.js") // 0.9.1 http://documentcloud.github.com/backbone/#
 .script(libFolder+"backbone_super.js")// https://gist.github.com/1542120
 .script(libFolder+"deep-model.js")// 13.Mai 2012 https://github.com/powmedia/backbone-deep-model
 .script(libFolder+"backbone-couchdb.js") // v1.0 https://github.com/janmonschke/backbone-couchdb
 .script(libFolder+"handlebars-1.0.0.beta.6.js") // 1.0.0.beta.6 https://github.com/wycats/handlebars.js/archives/master
 .script(libFolder+"i18n.js")// https://github.com/fnando/i18n-js/blob/master/vendor/assets/javascripts/i18n.js
// .script(libFolder+"backbone.validation.js")// March 2012 https://github.com/thedersen/backbone.validation#readme https://github.com/n-time/backbone.validations
.script(libFolder+"jquery.validation.js") // http://ajax.aspnetcdn.com/ajax/jquery.validate/1.9/jquery.validate.js
 .script(libFolder+"jquery.couchLogin.js")// May 10, 2011 https://github.com/couchapp/couchdb-login-jquery
 
 // .script(libFolder+"json2xml.js") // http://goessner.net/download/prj/jsonxml/
 // .script(libFolder+"xml2json.js")
 
 // Desktop
 // .script(libFolder+"jquery.jeditable.js") // 1.7.1 http://www.appelsiini.net/download/jquery.jeditable.js
 // .script(libFolder+"jquery.markitup.js") // v 1.1.x https://github.com/markitup/1.x/blob/master/markitup/jquery.markitup.js
 
 // will probably be used:
 // .script(libFolder+"form2js.js") // November 13 2011, https://github.com/maxatwork/form2js/tree/master/src
 // .script("lib/jstorange.js")// november 2011 https://github.com/andris9/jStorage
 
// .script(srcFolder+"/adventurio/mocks/Stories.js")
// .script(srcFolder+"/adventurio/mocks/SingleStory.js")
 
 .script(localeFolder+"locales.js") // i18n
 .script(srcFolder+"/adventurio/utilies/Json.js")

 // .script(srcFolder+"/adventurio/application/jeditable/MarkItUpSettings.js")
 .script(srcFolder+"/adventurio/models/StoryModel.js")
 .script(srcFolder+"/adventurio/models/User.js")
 .script(srcFolder+"/adventurio/views/superClasses/Basic.js")
 
 .script(srcFolder+"/adventurio/views/reader/Index.js")
 .script(srcFolder+"/adventurio/views/reader/Stories.js")
 .script(srcFolder+"/adventurio/views/reader/StorySummary.js")
 .script(srcFolder+"/adventurio/views/creator/CreateStory.js")
 .script(srcFolder+"/adventurio/views/creator/EditPageFormItemOptionsWindow.js")
 .script(srcFolder+"/adventurio/views/creator/ManagePage.js")
 .script(srcFolder+"/adventurio/views/creator/BrowseStory.js")
 .script(srcFolder+"/adventurio/views/creator/Story.js")
 .script(srcFolder+"/adventurio/views/creator/Signup.js")
 .script(srcFolder+"/adventurio/views/creator/Login.js")
 .script(srcFolder+"/adventurio/views/creator/Stories.js")
 .script(srcFolder+"/adventurio/views/creator/ManageStory.js")
 .script(srcFolder+"/adventurio/collections/StoriesCollection.js")
 .script(srcFolder+"/adventurio/routers/MainRouter.js")
// .script(srcFolder+"/adventurio/templates/listviews/Browse.js")
.script(srcFolder+"/adventurio/application/Handlebars.js")
.script(srcFolder+"/adventurio/application/ErrorHandling.js")
.script(srcFolder+"/adventurio/application/I18nSettings.js")
.script(srcFolder+"/adventurio/application/Validators.js")		
.script(srcFolder+"/adventurio/application/ApplicationSettings.js");