const fs = require('fs');

fs.chmod('file.txt', 0o765, (error) => {
	if (error) throw error;
});

fs.chmodSync('file.txt', 600);