const os = require('os');
const fs = require('fs');
const path = require('path');
const sep = path.sep;
const tmpDir = os.tmpdir();

// Appends 6 randomly selected characters to the prefix string.
fs.mkdtemp(`${tmpDir}${sep}`, (error, folder) => {
	if (error) throw error;
	console.log(`Created directory: ${folder}\n`);
});