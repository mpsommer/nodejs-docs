const http = require('http');
const keepAliveAgent = new http.Agent({
  keepAlive: false,
});
let options = {};
options.agent = keepAliveAgent;
options.port = 8080;
options.host = '127.0.0.1';
options.path = '/';

// Keeps a connection alive indefinetely.
http.request(options, (response) => {
  console.log(response.headers);
});