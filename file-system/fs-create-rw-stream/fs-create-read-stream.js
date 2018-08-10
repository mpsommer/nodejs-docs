const fs = require('fs');

let readStream = fs.createReadStream('../fs-append/test.txt');

readStream.on('open', (fd) => {
	readStream.pipe(process.stdout);
});