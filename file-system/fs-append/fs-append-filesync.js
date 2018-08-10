const fs = require('fs');


try {
	fs.appendFileSync('test.txt', 'Hello World!\n', 'utf8');
} catch (error) {
	if (error) throw error;
}

try {
	fd = fs.openSync('message.txt', 'a');
	fs.appendFileSync(fd, 'Hello World!\n', 'utf8');

} catch(error) {
	if (error) throw error;
} finally {
	if (fd !== undefined) {
		fs.closeSync(fd);
	}
}