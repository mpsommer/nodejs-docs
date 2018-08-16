const { fork } = require('child_process');
const forked = fork('child.js');

forked.on('message', (message) => {
	console.log(`child message: ${message.counter}`);
});

forked.send({hello: 'world'});