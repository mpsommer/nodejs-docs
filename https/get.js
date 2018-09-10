const https = require('https');

https.get('https://encrypted.google.com/', (res) => {
	console.log(`statusCode: ${res.statusCode}`);
	console.log(`headers: ${res.headers}`);

	res.on('data', (d) => {
		process.stdout.write(d);
	}).one=('error', (e) => {
		console.log(e);
	});
});