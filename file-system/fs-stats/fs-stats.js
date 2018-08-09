const fs = require('fs');

fs.stat('/Users/mpsommer/Documents/mindshare/msm-webapi/Dockerfile',
  (error, stats) => {
    if (error) throw error;
    console.log(`stats: ${JSON.stringify(stats)}`);
    console.log(`isBlockDevice: ${stats.isBlockDevice()}`)
    console.log(`isCharacterDevice: ${stats.isCharacterDevice()}`);
    console.log(`isDirectory: ${stats.isDirectory()}`);
    console.log(`isFIFO: ${stats.isFIFO()}`);
    console.log(`isFile: ${stats.isFile()}`);
    console.log(`isSocket: ${stats.isSocket()}`);
    console.log(`isSymbolicLink: ${stats.isSymbolicLink()}`);
    console.log(`stats.dev: ${stats.dev}`);
    console.log(`stats.ino: ${stats.ino}`);
    console.log(`stats.mode: ${stats.mode}`);
    console.log(`stats.nlink: ${stats.nlink}`);
    console.log(`stats.uid: ${stats.uid}`);
    console.log(`stats.gid: ${stats.gid}`);
    console.log(`stats.rdev: ${stats.rdev}`);
    console.log(`stats.size: ${stats.size}`);
    console.log(`stats.blksize: ${stats.blksize}`);
    console.log(`stats.blocks: ${stats.blocks}`);
    console.log(`stats.atimeMs: ${stats.atimeMs}`);
    console.log(`stats.mtimeMs: ${stats.mtimeMs}`);
    console.log(`stats.ctimeMs: ${stats.ctimeMs}`);
    console.log(`stats.birthtimeMs: ${stats.birthtimeMs}`);
    console.log(`stats.atime: ${stats.atime}`);
    console.log(`stats.mtime: ${stats.mtime}`);
    console.log(`stats.ctime: ${stats.ctime}`);
    console.log(`stats.birthtime: ${stats.birthtime}`);

  });