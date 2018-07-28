const http = require('http');


// Only send an echo if the request method is POST and the URL is /echo
const server = http.createServer((request, response) => {
  if (request.method === 'POST' && request.url === '/echo') {
    let body = [];
    request.on('data', (chunks) => {
      body.push(chunks);
    }).on('end', () => {
      body = Buffer.concat(body).toString();
      response.end(`${body} \n`);
    });
  } else {
    response.statusCode = 404;
    response.end();
  }
}).listen(8080);