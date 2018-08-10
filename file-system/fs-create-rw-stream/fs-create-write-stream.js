const fs = require('fs');

let writeStream = fs.createWriteStream('../../text-files/writestream.txt');

writeStream.on('open', (fd) => {
  fs.writeFile(fd, 'Hello World\n', (error) => {
		if (error) throw error;
		console.log(`File write`);
    writeStream.close();
  })  
});