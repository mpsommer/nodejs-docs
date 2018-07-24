const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

/*
 * rawListeners(eventName)
 * Returns a copy of the array of listeners for the event named eventName, 
 * including any wrappers (such as those created by .once()).
 */
eventEmitter.once('log', () => console.log('log once'));

// Returns a new Array with a function `onceWrapper` which has a property
// `listener` which contains the original listener bound above
const listeners = eventEmitter.rawListeners('log');
const logFnWrapper = listeners[0];

// logs "log once" to the console and does not unbind the `once` event
logFnWrapper.listener();

// logs "log once" to the console and removes the listener
logFnWrapper();

eventEmitter.on('log', () => console.log('log persistently'));
// will return a new Array with a single function bound by `.on()` above
const newListeners = eventEmitter.rawListeners('log');

// logs "log persistently" twice
newListeners[0]();
eventEmitter.emit('log');