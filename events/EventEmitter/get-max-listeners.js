const EventEmitter = require('events');
const myEmitter = new EventEmitter();

/*
 * getMaxListeners() returns <integer> the current max listener value for the 
 * EventEmitter which is either set by setMaxListeners(n), or defaults to 
 * EventEmitter.defaultMaxListeners.
 * 10 is the default max Listeners value.
 */
// 10
console.log(myEmitter.getMaxListeners())