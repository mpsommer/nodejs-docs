const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

/*
 * prependListener(eventName, listener)
 * Adds the listener function to the beginning of the listeners array for the
 * event named eventName.  No checks are made to see if the listener has already
 * been add.  Mulitiple calls passing the same combination of eventName and 
 * listener will result in the listener being added, and called, multiple times.
 * 
 */

 eventEmitter.on('event', () => {
   console.log('event emitted: A');
 });

 eventEmitter.prependListener('event', () => {
   console.log('event emitted: B');
 });

 eventEmitter.prependListener('event', () => {
  console.log('event emitted: C');
});

// output:
// event emitted: C
// event emitted: B
// event emitted: A
eventEmitter.emit('event');