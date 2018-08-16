process.on('message', (message) => {
	console.log(`parent message: ${message.hello}`);
});

let counter = 0;

setInterval(() => {
	process.send({counter: counter++});
}, 1000);