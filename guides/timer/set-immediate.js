// console.log('before immediate');

// setImmediate((arg) => {
//   console.log(`executing immediate: ${arg}`);
// }, 'so immediate');

// console.log('after immediate');

// function intervalFunc() {
//   console.log('Cant stop me now!');
// }

// setInterval(intervalFunc, 1500);

const timeoutObj = setTimeout(() => {
  console.log('timeout beyond time');
}, 1500);

const immediateObj = setImmediate(() => {
  console.log('immediately executing immediate');
});

const intervalObj = setInterval(() => {
  console.log('interviewing the interval');
}, 500);

clearTimeout(timeoutObj);
clearImmediate(immediateObj);
clearInterval(intervalObj);