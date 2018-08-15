const { execFile } = require('child_process');

execFile('node', ['--version'], (error, stdout, stderr) => {
	if (error) {
		console.error(`execFile error: ${error}`);
	}
	console.log(`stdout: ${stdout}`);
	console.log(`stderr: ${stderr}`);
});