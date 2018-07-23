const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

/*
 * prependOnceListener(eventName, listener)
 * Adds a one time listener function for the event named eventName to the
 * beginning of the listeners array.  The next time the eventName is triggered,
 * this listener is removed, and then invoked.
 */

const callbackA = () => {
  console.log('event emitted: A');
}

const callbackB = () => {
  console.log('event emitted: B');
  console.log(eventEmitter.listeners('event'));
}

eventEmitter.prependOnceListener('event', callbackA);
eventEmitter.prependOnceListener('event', callbackB);

console.log(eventEmitter.listeners('event'));
eventEmitter.emit('event');
console.log(eventEmitter.listeners('event'));
eventEmitter.emit('event');