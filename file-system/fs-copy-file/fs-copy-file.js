const fs = require('fs');

fs.copyFile('../fs-append/test.txt', 'test.txt', (error) => {
		if (error) throw error;
	});

try {
	fs.copyFileSync('../fs-append/test.txt', 'test.txt');
} catch (error) {
	if (error) throw error;
}