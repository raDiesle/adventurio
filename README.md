# choose your own adventure CYOA book creator editor online
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
