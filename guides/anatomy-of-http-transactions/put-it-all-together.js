const http = require('http');

const server = http.createServer((request, response) => {
  const {
    headers,
    method,
    url
  } = request;

  let body = [];
  request.on('error', (error) => {
    console.error(error.stack);
  }).on('data', (chunk) => {
    body.push(chunk);
  }).on('end', () => {
    body = Buffer.concat(body).toString();

    response.on('error', (error) => {
      console.error(error.stack);
    });

    response.statusCode = 200;
    response.setHeader('Content-Type', 'application/json');
    const responseBody = {
      headers,
      method,
      url,
      body
    };
    response.end(JSON.stringify(body) + '\n');
  });
}).listen(8080);