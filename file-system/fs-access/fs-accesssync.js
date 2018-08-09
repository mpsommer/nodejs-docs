const fs = require('fs');

const noWriteFile = 'no-write.txt';

// Check if file exists in the current directory.
try {
  fs.accessSync(noWriteFile, fs.constants.F_OK);
  console.log(`file exists`);
} catch (error) {
  console.log(`file does not exist`);
}

// Check if file is readable.
try {
  fs.accessSync(noWriteFile, fs.constants.R_OK);
  console.log(`file is readable`);
} catch (error) {
  console.log(`file is not readable`);
}

// Check if file is writable.
try {
  fs.accessSync(noWriteFile, fs.constants.W_OK);
  console.log(`file is writable`);
} catch (error) {
  console.log(`file is not writable`);
}

// Check if the file exists in the current directory, and if it is writable.
try {
  fs.accessSync(noWriteFile, fs.constants.F_OK | fs.constants.W_OK);
  console.log(`file exists and is writable`);
} catch (error) {
  console.error(
    `${noWriteFile} ${error.code === 'ENOENT' ? 'does not exist' : 'is read-only'}`);
}