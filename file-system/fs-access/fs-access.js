const fs = require('fs');

const noWriteFile = 'no-write.txt';

// Check if file exists in the current directory.
fs.access(noWriteFile, fs.constants.F_OK, (error) => {
  console.log(`${noWriteFile} ${error ? 'does not exist' : 'exists'}`);
});

// Check if file is readable.
fs.access(noWriteFile, fs.constants.R_OK, (error) => {
  console.log(`${noWriteFile} ${error ? 'is not readable' : 'is readable'}`);
});

// Check if file is writable.
fs.access(noWriteFile, fs.constants.W_OK, (error) => {
  console.log(`${noWriteFile} ${error ? 'is not writable' : 'is writable'}`);
});

// Check if the file exists in the current directory, and if it is writable.
fs.access(noWriteFile, fs.constants.F_OK | fs.constants.W_OK, (error) => {
  if (error) {
    console.error(
      `${noWriteFile} ${error.code === 'ENOENT' ? 'does not exist' : 'is read-only'}`);
  } else {
    console.log(`${noWriteFile} exists, and it is writable`);
  }
});

