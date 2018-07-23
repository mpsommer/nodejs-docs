const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

/*
 * removeListener(eventName, listener)
 * Removes the specified listener from the listener array
 * for the event named eventName.
 */

const callbackA = () => {
  console.log('A');
  eventEmitter.removeListener('event', callbackB);
}

const callbackB = () => {
  console.log('B');
}

eventEmitter.on('event', callbackA);
eventEmitter.on('event', callbackB);

// callbackA removes listener callbackB but it will still be called.
// Internal listener array [ [Function: callbackA], [Function: callbackB] ]
console.log(eventEmitter.listeners('event'));
// Prints:
// A
// B
eventEmitter.emit('event');

// callbackB is now removed.
// Internal listener array [ [Function: callbackA] ]
console.log(eventEmitter.listeners('event'));
// Prints:
// A
eventEmitter.emit('event');

