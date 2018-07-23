const EventEmitter = require('events');
const myEmitter = new EventEmitter();

/*
 * listenerCount()
 * eventName
 * Returns <integer>
 * Returns the number of listeners listening to the event named eventName.
 */

 myEmitter.on('event', () => {});
 myEmitter.on('event', () => {});
 myEmitter.on('event', () => {});
 myEmitter.on('event', () => {});
 myEmitter.addListener('event', () => {});
 myEmitter.addListener('event', () => {});
 myEmitter.addListener('event', () => {});
 myEmitter.addListener('event', () => {});
// 8
 console.log(myEmitter.listenerCount('event'));