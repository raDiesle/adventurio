# choose your own adventure CYOA book creator editor online

The idea is to create a Choose your own adventure text base social game
creator, focused on mobile, but also working for desktop.

#### Technologies:

* Very clear architecture, REST-based
* JavaScript
* jQuery
* jQuery Validator plugin
* jQuery Mobile
* Backbone.js
* Underscore
* Handlebars
* deprecated: currently couchdb
  
* deprecated: couchdb authentication
* Optional, jQuery Mobile can be exchanged with Twitter boostrap later on

#### Planned, port to technologies:
* Thorax and lumber
* appengine
* Python( minimum Server logic expected)
* google cloud storage
  ( Because of REST PATCH operation on JSON files and authorization)
* Extensive usage of Client-API
  see https://developers.google.com/storage/docs/json_api/

### Jump in: Project explanation for developers

* a story = model is one complex json object

#### Overall Goals

* easy for developers to join, JavaScript based
* easy to use and understand
* guide how to use
* Flexible and unlimited possibilities to customize
* Offline Support
* Single Page App
* Multi language support
* Tests
* Socializing features



Want to join or collaborate, contact me by david.amend@it-amend.de
or chat at gmail or skype: raDies_chen

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
