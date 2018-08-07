const fs = require('fs');
fs.open('file.txt', 'w', (err, fd) => {
  if (err) throw err;
  fs.write(fd, 'hello world 2', (error) => {
    if (error) throw error;
    // always close the file descriptor!
    fs.close(fd, (err) => {
      if (err) throw err;
    });
  });
  });