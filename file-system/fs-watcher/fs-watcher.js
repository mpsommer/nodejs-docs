const fs = require('fs');

  // fs.watcher object is returned from this.
  // eventType is either change, or rename.
  let watcher = fs.watch('./fs-watcher/', (eventType, filename) => {
    if (filename) {
      console.log(`watching ${filename}`);
      // fs.stat('./fs-watcher/' + filename, (error, stats) => {
      //   if (error) throw error;
      //   console.log(`stat: ${JSON.stringify(stats)}`);
      // })
      console.log(`event: ${eventType}`);
      watcher.close();
    }
  });

  watcher.on('close', () => {
    console.log(`watcher has closed`);
  });