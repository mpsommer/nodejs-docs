const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

/*
 * setMaxListeners(n)
 * Allows the limit of listeners to be modified for this specific EventEmitter 
 * instance. The value can be set to Infinity (or 0) to indicate an unlimited 
 * number of listeners.
 */
eventEmitter.setMaxListeners(2);
eventEmitter.addListener('event', () => {
  console.log('event emitted');
});
eventEmitter.addListener('event', () => {
  console.log('event emitted');
});
eventEmitter.addListener('event', () => {
  console.log('event emitted');
});

output:
// event emitted
// event emitted
// event emitted
// (node:61273) MaxListenersExceededWarning: Possible EventEmitter memory 
// leak detected. 3 event listeners added. Use emitter.setMaxListeners() to 
// increase limit
eventEmitter.emit('event');