const EventEmitter = require('events');
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();

/*
 * eventName, ...args.
 * Synchronously calls each of the listeners registered for the event named eventName,
 * in the order they were registered, passing the supplied arguments to each.
 * Returns true if the event had listeners, otherwise false.
 */

 // Returns false.
 console.log(myEmitter.emit('event'));

 myEmitter.on('event', () => {
   console.log('event emitted.');
 });
 // Returns true.
 console.log(myEmitter.emit('event'));