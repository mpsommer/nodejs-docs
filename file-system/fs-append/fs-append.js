const fs = require('fs');

fs.appendFile('test.txt', 'Hello World!\n', (error) => {
	if (error) throw error;
	console.log(`Data appended to the file.`); 
});

fs.open('test.txt', 'a', (error, fd) => {
	if (error) throw error; 
	fs.appendFile(fd, 'Hello World!\n', 'utf8', (error) => {
		if (error) throw error;
		console.log(`file appended`);
		fs.close(fd, (error) => {
			if (error) throw error;
		});
	});

});