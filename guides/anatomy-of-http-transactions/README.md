# Anatomy of an http transaction.
https://nodejs.org/en/docs/guides/anatomy-of-an-http-transaction/

* annotated-example.js: the first half of the guide.
* put-it-all-together.js: the section with the same name.
* echo-server.js: the section with the same name.
* echo-server-tweaked.js: Modification of echo-server.js add basic routing
based on request objects.
* echo-server-tweaked-pipe.js: Uses `pipe` to direct data between request and 
response
* echo-server-complete.js: Handles errors, is complete basic server.

## Knowledge gained:
* Instantiate an HTTP server with a request handler function, and have it listen
on a port.
* Get headers, URL, method and body data from request objects
* Make routing decisions based on URL and/or other data in request objects.
* Send headers, HTTP status codes and body data via response objects.
* Pipe data from request objects and to response objects.
* Handle stream errors in both the request and response streams.


