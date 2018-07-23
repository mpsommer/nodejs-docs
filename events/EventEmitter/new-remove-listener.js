const EventEmitter = require('events');
class MyEmitter extends EventEmitter {};
const myEmitter = new MyEmitter();

////////////////    newListener    ////////////////
/*
 * All EventEmitters emit the 'newListener' event when new listeners
 * are added and the 'removeListener' event when existing listeners 
 * are removed.
 * Listeners registered for the 'newListener' event will be passed 
 * the event name and a reference to the listener being added.
 * The fact that the event is triggered before adding the listener 
 * has a subtle but important side effect: any additional listeners 
 * registered to the same name within the 'newListener' callback 
 * will be inserted before the listener that is in the process of 
 * being added.
 * Illustrated below.
 * Output: 
 * event response B
 * event response A
 */

// once() ensures no infinite loop.
myEmitter.once('newListener', (event, listener) => {
  if (event === 'event') {
    // Insert a new listener in front.
    myEmitter.on('event', () => {
      console.log('event response B');
    });

  }
});

myEmitter.on('event', () => {
  console.log('event response A');
});

myEmitter.emit('event');

////////////////    removeListener    ////////////////
/*
 * removeListenerEvent is emitted after a listener is removed.
 * Illustrated below.
 * Output:
 * removeResponse B removeListenerEvent
 * removeResponse A
 */
myEmitter.once('removeListenerEvent', () => {
  console.log('removeResponse A');

});

myEmitter.on('removeListener', (event, listener) => {
  console.log('removeResponse B', event);
});

myEmitter.emit('removeListenerEvent');