/**
 * Author: Michael Sommer
 * command: node hello-world.js
 */

/**
 * Use require() for commonjs modules.
 * Does not require command line flags.
 */
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World!\n' + 'http loaded as commonjs module.');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});