const { spawn } = require('child_process');

// Type input then hit \n then contorl d
// We pipe the main proces (stdin), a readable stream into the child process
// stdin, which is a writable stream

const child = spawn('wc');

process.stdin.pipe(child.stdin)

child.stdout.on('data', (data) => {
  console.log(`child stdout:\n${data}`);
});