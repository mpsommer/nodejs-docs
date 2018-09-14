const crypto = require('crypto');

crypto.randomBytes(256, (error, buffer) => {
	if (error) throw error;
	console.log(`${buffer.length} bytes of random data: ${buffer.toString('hex')}`);
});