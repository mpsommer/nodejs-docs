const fs = require('fs');

let writeStream = fs.createWriteStream('test.txt');

writeStream.on('open', (fd) => {
  console.log(`open event occurred: ${fd}`);
  fs.writeFile(fd, 'Hello World', (error) => {
    if (error) throw error;
    console.log(`bytesWritten: ${writeStream.bytesWritten}`); 
    console.log(`path: ${writeStream.path}`);
    writeStream.close();
  })  
});

writeStream.on('ready', () => {
  console.log(`ready event occurred`);
});

writeStream.on('close', () => {
  console.log(`close event occurred`);
});