## Generated CouchApp


whatever change
This is meant to be an example CouchApp and to ship with most of the CouchApp goodies.

Clone with git:

    git clone git://github.com/couchapp/example.git
    cd example


Configure:
	bind_address = 127.0.0.1
	localhost:5984/ = /adventurio/_design/adventurio/_rewrite/

Install with 
    
    couchapp push . http://localhost:5984/example

or (if you have security turned on)

    couchapp push . http://adminname:adminpass@localhost:5984/example
  
You can also create this app by running

    couchapp generate example && cd example
    couchapp push . http://localhost:5984/example

Deprecated: *couchapp generate proto && cd proto*


## Todo

* factor CouchApp Commonjs to jquery.couch.require.js
* use $.couch.app in app.js

## License

Apache 2.0
