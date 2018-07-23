const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

 /*
  * on(eventName, listener)
  * Adds the listener function to the end of the listeners array for the event 
  * named eventName. No checks are made to see if the listeneer has already been
  * added. Multiple calls passing the same combination of eventName and 
  * listener will result in the listener being added, and called multiple times.
  */

  eventEmitter.on('event', () => {
    console.log('event emitted: A');
  });

  eventEmitter.on('event', () => {
    console.log('event emitted: B');
  });

  eventEmitter.emit('event');