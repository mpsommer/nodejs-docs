const http = require('http');

const server = http.createServer((request, response) => {
  // Error handling 
  // Log errors to stderr
  request.on('error', (error) => {
    console.error(error);
    response.statusCode = 400;
    response.end();
  });

  response.on('error', (error) => {
    console.error(error);
  });

  if (request.method === 'POST' && request.url === '/echo') {
    let body = [];
    request.on('data', (chunks) => {
      body.push(chunks);
    }).on('end', () => {
      body = Buffer.concat(body).toString();
      response.end(`${body} \n`);
    });
  } else {
    response.status = 404;
    response.end();
  }

}).listen(8080);