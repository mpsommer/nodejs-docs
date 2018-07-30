[http ClientRequest](https://nodejs.org/dist/latest-v10.x/docs/api/http.html#http_class_http_clientrequest)

Internally created object, returned from http.request(). Represents an in
progress request whose header has already been queued. The header is still
mutable using the correct methods. Actual header will be sent along with the 
first data chunk or when calling request.end().

`response` will be emitted from the request object when the response headers
have been received.