/*
 * Author: Michael Sommer
 * Description:
 * This file demonstrates the basic functionality 
 * of event emitters.
 * sources:
 * https://nodejs.org/api/events.html#events_events
 */
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
let count = 0;

////////////////////////////////////////////////////////////////
////////////////            Listeners          /////////////////
////////////////////////////////////////////////////////////////
/*
 * Ordinary function listener.
 * When ordinary listenter function is called,
 * the standard 'this' keyword is set to reference
 * the EventEmitter instance to which the listener is attached.
 */
myEmitter.on('event1', function () {
  console.log('\'event1\' event emitted, ordinary function listenter', 'this:', this);
  // Output: 
  // event1, ordinary function listenter this: MyEmitter {
  // _events: { event1: [ [Function], [Function] ] },
  // _eventsCount: 1,
  // _maxListeners: undefined }
});

/*
 * ES6 arrow function listener.
 * When arrow function is the listener, 
 * 'this' keyword will no longer be referenced by EventEmitter instance.
 */
myEmitter.on('event1', () => {
  console.log('\'event1\' event emitted, arrow function listenter', 'this:', this);
  // Output: event1, arrow function listenter this: {}
});

/*
 * once() registers a listener that is called at most 
 * once for a particular event.
 * Upon emitted event, the listener is unregistered,
 * then called.
 */
myEmitter.once('eventOnce', () => {
  console.log('\'eventOnce\' event emitted, once() listener', 'count:', ++count);
});

/*
 * error listener.  
 * Handles error from event emitters.
 * error listeners should always be added.
 */
myEmitter.on('error', (error) => {
  console.log('\'error\' event emitted.');
});

////////////////////////////////////////////////////////////////
////////////////          Event Emitters          //////////////
////////////////////////////////////////////////////////////////

// Used to trigger an event.
myEmitter.emit('event1');

myEmitter.emit('eventOnce');
// This is not listened to.
myEmitter.emit('eventOnce');

/*
 * Emit an error
 * If no listener for 'error' event, the error is thrown, 
 * a stack trace is printed, and the Node.js process exits.
 */
myEmitter.emit('error', new Error('Error 1'));