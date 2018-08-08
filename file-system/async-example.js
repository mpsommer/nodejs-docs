const fs = require('fs');

// No guarantee that rename will occur before stats, so prone to error.
fs.rename('hello', 'world', (err) => {
  if (err) throw err;
  console.log('renamed complete');
});
fs.stat('world', (err, stats) => {
  if (err) throw err;
  console.log(`stats: ${JSON.stringify(stats)}`);
});

// The above should be:

fs.rename('hello', 'world', (err) => {
  if (err) throw err;
  fs.stat('world', (err, stats) => {
    if (err) throw err;
    console.log(`stats: ${JSON.stringify(stats)}`);
  });
});