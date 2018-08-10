const fs = require('fs');

fs.chown('root-owned.txt', 501, 20, (error) => {
	if (error) throw error;
});

fs.chownSync('root-owned.txt', 501, 20);