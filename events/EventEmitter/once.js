const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

/*
 * once(eventName, listener)
 * Adds a one-time listener function for the event named eventName. The next
 * time eventName is triggered, this listener is removed and then invoked.
 */

 eventEmitter.once('event', () => {
   console.log('event emitted.');
 });

 // event emitted.
 eventEmitter.emit('event');
 // no output.
 eventEmitter.emit('event');