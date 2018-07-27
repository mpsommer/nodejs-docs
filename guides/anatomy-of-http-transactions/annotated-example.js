const http = require('http');

//  createServer() creates the web server object.
//  The function passed into createServer is called the request handler.
//  server is an instance of EventEmitter, this is just shorthand for creating 
//  a server object and then adding the lisener later.
const server = http.createServer((request, response) => {
  // request and response are objects that are helpful for dealing with the 
  // transaction. The request object contains handy properties and is an 
  // instance of IncomingMessage.
  // All headers are represented in lowercase, regardless of how the client 
  // sent them
  const {
    method,
    url,
    headers,
  } = request;
  // Raw headers will retains the cases.
  const {
    rawHeaders,
  } = request;

  console.log(`method: ${method} \nurl: ${url}`);
  console.log(`headers: ${JSON.stringify(headers)}`);
  console.log(`raw headers: ${JSON.stringify(rawHeaders)}`);

  /////     request body    /////
  // The request object implements the ReadableStream interface. We can grab 
  // data right out of the stream by listening to the 'data' and 'end' events.
  // Each chunk from 'data' is a buffer, if it is known the data will be a
  // string, it is best practice to collect the data in an array, then at the 
  // 'end' concatenate and stringify it.
  let body = [];
  request.on('data', (chunk) => {
    body.push(chunk);
  }).on('end', () => {
    body = Buffer.concat(body).toString();
    console.log(`body: ${body}`);
    // at this point, `body` has the entire request body stored in it as a string
  });
  /////     errors     /////
  // Since the request object is a ReadableStream, it is also an EventEmitter, 
  // and behaves like one on an 'error'.
  request.on('error', (error) => {
    // This prints the error message and stack trace to `stderr`.
    console.error(error.stack);
  });

  // The response object is an instance of ServerResponse which is a 
  // WritableStream.  It contains many useful methods for sending back data
  // to the client.

  response.on('error', (error) => {
    // This prints the error message and stack trace to `stderr`.
    console.error(error.stack);
  });

  // Default value for this is 200;
  response.statusCode = 200;

  // Setting response headers. Case is insenesitive on names.
  // implicit headers.
  response.setHeader('Content-Type', 'application/json');
  response.setHeader('X-Powered-By', 'bacon');
  response.setHeader('x-powered-by', 'eggs');

  // Explicitly write headers to the response stream
  response.writeHead(200, {
    'Content-Type': 'application/json',
    'X-Powered-By': 'bacon'
  });

  // Sending response body.
  // Since response is a WritableStream, just use usual stream methods.
  // response.write('<html>');
  // response.write('<body>');
  // response.write('<h1>Hello, World!</h1>');
  // response.write('</body>');
  // response.write('</html>');
  // response.end();

  // The above can all be simplified.
  response.end('<html><body><h1>Hello, World!</h1></body></html>');


  //  listen() must be called in order to actually serve requests.
  //  port must be passed at the minimum.
}).listen(8080)