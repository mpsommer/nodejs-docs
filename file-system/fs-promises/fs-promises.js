const fsPromises = require('fs').promises;

async () => {
	let fileHandle;
	try {
		fileHandle = await fsPromises.open('../../text-files/test.txt', 'r');
		let data = await fileHandle.readFile();
		console.log(`file data: \n${data}`)
		await fileHandle.close();

	} catch (error) {
		throw error;
	}

};
