


# choose your own adventure CYOA book creator editor online

The idea is to create a Choose your own adventure text base social game
creator, focused on mobile, but also working for desktop.

Technologies used:
* JavaScript
* jQuery Mobile
* Backbone.js
* currently couchdb -> port later to appengine and google cloud storage
  ( Because of REST PATCH operation on JSON files and authorization)
* Optional, jQuery Mobile can be exchanged with Twitter boostrap later on
* Goals: Offline Support, Tests, social connection, easy to use and understand

Want to join or collaborate, contact me by david.amend@it-amend.de


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
