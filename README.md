

# choose your own adventure CYOA book creator editor online

The idea is to create a Choose your own adventure text base social game
creator, focused on mobile, but also working for desktop.

Technologies used:
* Very clear architecture, REST-based
* JavaScript
* jQuery Validator plugin
* jQuery Mobile
* Backbone.js
* currently couchdb -> port later to appengine and google cloud storage
  ( Because of REST PATCH operation on JSON files and authorization)
* couchdb authentication
* Optional, jQuery Mobile can be exchanged with Twitter boostrap later on
* Goals: easy to use and understand, flexible and unlimited possibilities to customize, Offline Support, Multi language support, Tests, social connection

Want to join or collaborate, contact me by david.amend@it-amend.de

Screenshots so far:



![Startscreen](/adventurio_screenshots/01_WelcometoAdventurio.png "Startscreen")

![Create a new story](/adventurio_screenshots/02_CreatenewStory.png "Create a new story")

![Select story](/adventurio_screenshots/03_SelectStory.png "Select a story")

![Browse your story](/adventurio_screenshots/04_BrowseStoryEditing.png "Browse the pages to edit")

![Edit Page](/adventurio_screenshots/05_EditPageElements.png "Edit page")

![Edit Page element](/adventurio_screenshots/06_OptionsForElementConfiguration.png "Edit element on page")



## create your own story
### searching for contributors

Configure in local.ini of couchdb:
	bind_address = 127.0.0.1

vhosts
	localhost:5984/ = /adventurio/_design/adventurio/_rewrite/

secure_rewrites = false

[admins]
username = password

restart couchdb

Install with
    couchapp push . http://simpleUser:password@localhost:5984/adventurio

Use
couchapp autopush --update-delay 1 . http://simpleUser:password@127.0.0.1:5984/adventurio/
