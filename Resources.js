var libFolder = "lib/"; 
var srcFolder = "src/";
var localeFolder = "locale/";

$LAB
 .setOptions({AlwaysPreserveOrder:true})
 .script("ApplicationScope.js")
 .script(libFolder+"json2.js")
 .script(libFolder+"jquery-1.7.js")
 // .script("lib/jquery.mobile.router.js")
 .script(libFolder+"jquery.mobile-1.0.js")
 .script(libFolder+"jquery.couch.js") // for signup november 2011 https://github.com/apache/couchdb/blob/master/share/www/script/jquery.couch.js
 .script(libFolder+"jquery.couch.app.js") // v 1.0.1 https://github.com/couchapp/couchapp/blob/master/couchapp/templates/vendor/couchapp/_attachments/jquery.couch.app.js
 .script(libFolder+"couch.js") // oktober 2011 https://github.com/apache/couchdb/blob/master/share/www/script/couch.js
 .script(libFolder+"sha1.js") // couchdb
 .script(libFolder+"underscore.js")// 1.3.0 http://documentcloud.github.com/underscore/underscore.js
 .script(libFolder+"backbone.js") // 0.5.3 http://documentcloud.github.com/backbone/#
 .script(libFolder+"backbone-couchdb.js") // v1.0 https://github.com/janmonschke/backbone-couchdb
 .script(libFolder+"handlebars-1.0.0.beta.6.js") // 1.0.0.beta.6 https://github.com/wycats/handlebars.js/archives/master
 .script(libFolder+"form2js.js") // November 13 2011, https://github.com/maxatwork/form2js/tree/master/src
 // .script(libFolder+"js2form.js")// september 19 2011, .script("lib/jstorange.js")// november 2011 https://github.com/andris9/jStorage
 .script(libFolder+"jquery.toObject.js")// Nomeber 13 2011, . https://github.com/daffl/jquery.dform/
 .script(libFolder+"jquery.couchLogin.js")// May 10, 2011 https://github.com/couchapp/couchdb-login-jquery
 
// .script(srcFolder+"/adventurio/mocks/Stories.js")
// .script(srcFolder+"/adventurio/mocks/SingleStory.js")
 
 .script(srcFolder+"/adventurio/models/StoryModel.js")
 .script(srcFolder+"/adventurio/models/User.js")
 .script(srcFolder+"/adventurio/views/reader/Index.js")
 .script(srcFolder+"/adventurio/views/ShowStories.js")
 .script(srcFolder+"/adventurio/views/ShowStory.js")
 .script(srcFolder+"/adventurio/views/CreateStory.js")
 .script(srcFolder+"/adventurio/views/EditStory.js")
 .script(srcFolder+"/adventurio/views/CreatePage.js")
 .script(srcFolder+"/adventurio/views/creator/Index.js")
 .script(srcFolder+"/adventurio/views/creator/Signup.js")
 .script(srcFolder+"/adventurio/views/creator/Login.js")
 .script(srcFolder+"/adventurio/views/creator/Stories.js")
 .script(srcFolder+"/adventurio/collections/StoriesCollection.js")
 .script(srcFolder+"/adventurio/routers/MainRouter.js")
 .script(srcFolder+"/adventurio/application/ApplicationSettings.js");