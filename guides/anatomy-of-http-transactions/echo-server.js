const http = require('http');

const server = http.createServer((request, response) => {
  let body = [];
  request.on('data', (chunks) => {
    body.push(chunks);
  }).on('end', () => {
    response.end(Buffer.concat(body).toString());
  });

}).listen(8080);