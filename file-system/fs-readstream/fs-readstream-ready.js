const fs = require('fs');

// Cannot get the 'ready' event to print 

let readStream = fs.createReadStream('test.txt');

readStream.on('open', (fd) => {
  console.log(`open event occurred`);
  readStream.pipe(process.stdout);
});

readStream.on('ready', () => {
  console.log(`ready event occurred`);
});

readStream.on('close', () => {
  console.log(`close event occurred`);
});

readStream.on('error', (error) => {
  console.error(error);
});