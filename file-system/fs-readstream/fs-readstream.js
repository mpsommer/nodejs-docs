const fs = require('fs');

let readStream = fs.createReadStream('test.txt');


readStream.on('open', (fd) => {
  console.log(`open fd: ${fd}`);
  console.log(`readStream.path: ${readStream.path}`);
  console.log(`readStream.bytesRead: ${readStream.bytesRead}`)
  readStream.pipe(process.stdout);
});

readStream.on('ready', () => {
  console.log(`ready:`);
});

readStream.on('close', () => {
  console.log(`close event`);
  console.log(`readStream.bytesRead: ${readStream.bytesRead}`)
});

readStream.on('error', (error) => {
  console.error(`${error}`);
});

