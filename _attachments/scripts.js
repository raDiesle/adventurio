 $LAB
 .setOptions({AlwaysPreserveOrder:true})
 .script("init.js")
 .script("lib/json2.js")
 .script("lib/jquery-1.7.js")
 // .script("lib/jquery.mobile.router.js")
 .script("lib/jquery.mobile-1.0.js")
 .script("lib/jquery.couch.js") // november 2011 https://github.com/apache/couchdb/blob/master/share/www/script/jquery.couch.js
 .script("lib/jquery.couch.app.js") // v 1.0.1 https://github.com/couchapp/couchapp/blob/master/couchapp/templates/vendor/couchapp/_attachments/jquery.couch.app.js
 .script("lib/couch.js") // oktober 2011 https://github.com/apache/couchdb/blob/master/share/www/script/couch.js
 .script("lib/underscore.js")// 1.3.0 http://documentcloud.github.com/underscore/underscore.js
 .script("lib/backbone.js") // 0.5.3 http://documentcloud.github.com/backbone/#
 .script("lib/backbone-couchdb.js") // v1.0 https://github.com/janmonschke/backbone-couchdb
 .script("lib/handlebars-1.0.0.beta.6.js") // 1.0.0.beta.6 https://github.com/wycats/handlebars.js/archives/master
 .script("lib/form2js.js") // November 13 2011, https://github.com/maxatwork/form2js/tree/master/src
 .script("lib/js2form.js")// september 19 2011, .script("lib/jstorange.js")// november 2011 https://github.com/andris9/jStorage
 .script("lib/jquery.toObject.js")// Nomeber 13 2011, . https://github.com/daffl/jquery.dform/
 .script("lib/jquery.couchLogin.js")// May 10, 2011 https://github.com/couchapp/couchdb-login-jquery 
 .script("scripts/backbone/adventurio/mocks/Stories.js")
 .script("scripts/backbone/adventurio/mocks/SingleStory.js")
 .script("scripts/backbone/adventurio/models/StoryModel.js")
  .script("scripts/backbone/adventurio/models/User.js")
 .script("scripts/backbone/adventurio/views/ShowStories.js")
 .script("scripts/backbone/adventurio/views/ShowStory.js")
 .script("scripts/backbone/adventurio/views/CreateStory.js")
 .script("scripts/backbone/adventurio/views/EditStory.js")
 .script("scripts/backbone/adventurio/views/CreatePage.js")
 .script("scripts/backbone/adventurio/views/creator/Index.js")
 .script("scripts/backbone/adventurio/views/creator/Login.js")
 .script("scripts/backbone/adventurio/views/creator/Stories.js")
 .script("scripts/backbone/adventurio/collections/StoriesCollection.js")
 .script("scripts/backbone/adventurio/routers/MainRouter.js")
.script("app.js");
 
 // http://code.google.com/p/form2js/