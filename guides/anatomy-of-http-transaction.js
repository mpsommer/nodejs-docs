const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

//  createServer() creates the web server object.
//  The function passed into createServer is called the request handler.
//  server is an instance of EventEmitter, this is just shorthand for creating 
//  a server object and then adding the lisener later.
const server = http.createServer((request, response) => {
  // request and response are objects that are helpful for dealing with the 
  // transaction. The request object contains handy properties. The request 
  // object is an instance of IncomingMessage.
  const {
    method,
    url,
  } = request;
  // All headers are represented in lowercase, regardless of how the client 
  // sent them
  const {
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
  // The request objects implements the ReadableStream interface. We can grab 
  // data right out of th stream by listening to the 'data' and 'end' events.
  // Each chunk from 'data' is a buffer, if it is known the data will be a
  // string, it is best practice to collect the data in an array, then at the 
  // 'end' concatenate and stringify it.
  let body = [];
  request.on('data', (chunk) => {
    body.push(chunk);
  }).on('end', () => {
    body = Buffer.concat(body).toString();
    // at this point, `body` has the entire request body stored in it as a string
  });

  /////     errors     /////
  // Since the request object is a ReadableStream, it is also an EventEmitter, 
  // and behaves like one on an 'error'.
  request.on('error', (error) => {
    // This prints the error message and stack trace to `stderr`.
    console.error(error.stack);
  });
  //  listen() must be called in order to actually serve requests.
  //  port must be passed at the minimum.
}).listen(8080)