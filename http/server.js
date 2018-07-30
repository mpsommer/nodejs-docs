const http = require('http');

const port = 8080;
const hostname = '127.0.0.1';

// Server to handle requests of other files in this directory.
const server = http.createServer((request, response) => {
  // request.on('error', (error) => {
  //   console.error(error);
  //   response.statusCode = 400;
  //   response.end('Helo');
  // });
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');
  response.end('Hello World');;

}).listen(port, hostname, () => {
  console.log(`Server started on ${hostname}:${port}`);
});