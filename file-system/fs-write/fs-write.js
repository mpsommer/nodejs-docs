const fs = require('fs');

const buffer = new Buffer('This is the buffer to write');

// writes a buffer to specific positions in a file.
fs.open('../../text-files/test.txt', 'w', (error, fd) => {
	if (error) throw error;
	fs.write(fd, buffer, 0, buffer.length, 0, (error, bytesWritten, buffer) => {
		if (error) throw error;
		console.log(`bytesWritten: ${bytesWritten}`);
		console.log(buffer.toString('utf8'))
		fs.close(fd, (error) => {

		});
	});
});

// for writing a string a specific position in a file.
fs.open('../../text-files/test.txt', 'w', (error, fd) => {
	if (error) throw error;
	fs.write(fd, 'This is the string to write', 8, 'utf8',
		(error, bytesWritten, string) => {
			if (error) throw error;
			fs.close(fd, (error) => {
				if (error) throw error;
				console.log(`bytesWritten: ${bytesWritten}`);
				console.log(`string: ${string}`)
			});
		});
});

fs.writeFile('../../text-files/test.txt', 'message to write', (error) => {
	if (error) throw error;
	console.log(`writeFile function called.`);
});

try {
	let message = `fileSync message to write\nfileSync message to write\n
	fileSync message to write\nfileSync message to write\nfileSync message to 
	write\n`
	fs.writeFileSync('../../text-files/test.txt', message);
	console.log(`writeFileSync function called.`);
} catch (error) {
	throw error;
}

try {
	let message = 'blah blah blah blah blah blah blah blah blah blah blah blah';
	let fd = fs.openSync('../../text-files/test.txt', 'w')
	console.log(`fs.openSync called: ${fd}`);
	let bytesWritten = fs.writeSync(fd, message);
	console.log(`fs.writeSync called: ${bytesWritten} bytesWritten`);
} catch (error) {
	throw error;
}