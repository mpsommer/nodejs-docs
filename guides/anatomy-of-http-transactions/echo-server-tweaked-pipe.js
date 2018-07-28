const http = require('http');

// Since the request object is a ReadableStream and the response object is a 
// WritableStream, we can use pipe to direct data from one to the other.
let server = http.createServer((request, response) => {
  if(request.method === 'POST' && request.url === '/echo') {
    request.pipe(response);
  } else {
    response.statusCode= 404;
    response.end();
  }
}).listen(8080);