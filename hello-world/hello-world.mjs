/**
 * Author: Michael Sommer
 * command: node --experimental-modules hello-world.mjs
 */

/**
 * Use import for ECMAScript modules.
 * Requires --experimental-modules command line flag
 * as well as .mjs file extension.
 */
import http from 'http';

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World!\n' + 'http loaded as ECMAScript module.');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});