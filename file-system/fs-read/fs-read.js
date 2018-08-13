const fs = require('fs');

// READ FILES
// fs.read is good for reading specified positions of a file.
fs.open('file.txt', 'r', (error, fd) => {
	if (error) throw error;
	console.log(`fd: ${fd}`);
	fs.read(fd, Buffer.alloc(30), 0, 30, 0, (error, bytesRead, buffer) => {
		if (error) throw error;
		console.log(`bytesRead: ${bytesRead}`);
		console.log(buffer.toString('utf8'))
	});
});

// fs.readFile is for reading the entire contents of a file.
fs.readFile('file.txt', (error, data) => {
	if (error) throw error;
	console.log(`feadFile data: \n${data}`);
});
try {
	let data = fs.readFileSync('file.txt');
	console.log(`readFileSync data: \n${data}`);
} catch (error) {
	if (error) throw error;
}


// READ DIRS
fs.readdir('../../text-files', (error, files) => {
	if (error) throw error;
	files.forEach((file) => {
		console.log(`file: ${file}`);
	})
});

try {
	let files = fs.readdirSync('../../text-files');
	files.forEach((file) => {
		console.log(`file (sync): ${file}`);
	});
} catch (error) {
	if (error) throw error;
}


// READ SYM LINKS
// Returns the source of the link
fs.readlink('/Users/mpsommer/Documents/mindshare/msm-webapi/app/RevealAI',
	(error, linkString) => {
		if (error) throw error;
		console.log(`readLink linkString: \n${linkString}`);
	});