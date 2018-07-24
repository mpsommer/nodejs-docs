const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

/*
 * removeAllListeners(eventName)
 * Returns: EventEmitter
 * Removes all listeners, or those of the specified eventName.
 * Note this is bad practice to remove listeners added somewhere else in the
 * code, particularly when the EventEmitter instance was created by some other 
 * component or module (e.g. sockets or file streams).
 */

const callbackA = () => {
  console.log('event emitted: A');
}

const callbackB = () => {
  console.log('event emitted: B');
}

const callbackC = () => {
  console.log('event emitted: C');
  eventEmitter.removeAllListeners('event');
}

 eventEmitter.on('event', callbackA);
 eventEmitter.on('event', callbackB);
 eventEmitter.on('event', callbackC);

//  output:
//  [ [Function: callbackA],
//   [Function: callbackB],
//   [Function: callbackC] ]
// event emitted: A
// event emitted: B
// event emitted: C
// []
 console.log(eventEmitter.listeners('event'));
 eventEmitter.emit('event');
 console.log(eventEmitter.listeners('event'));
 eventEmitter.emit('event');
