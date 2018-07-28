[Nodejs http docs](https://nodejs.org/dist/latest-v10.x/docs/api/http.html)

## HTTP notes.
* The http interface never buffers entire requests or responses, the user is able
to stream data.
* HTTP message header keys are lowercased, values are not modified.
* HTTP API is very low level and only deals with stream handling and message
parsing. It parses a message into headers and body but it does not parse the
actual headers or the body.
* Raw headers are retained in the rawHeaders array property.

[Class: http.Agent](https://nodejs.org/dist/latest-v10.x/docs/api/http.html#http_class_http_agent)
