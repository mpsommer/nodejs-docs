const crypto = require('crypto');
const hash = crypto.createHash('sha256');

hash.update('some data to hash');

// Calculates the digest of all of the data passed to be hashed (using the 
// hash.update() method). The encoding can be 'hex', 'latin1' or 'base64'. 
// If encoding is provided a string will be returned; otherwise a Buffer is 
// returned.
console.log(hash.digest('hex'));