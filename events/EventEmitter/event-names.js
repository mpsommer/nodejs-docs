const EventEmitter = require('events');
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();

/*
 * eventNames() returns an array listing the events
 * for which the emitter has registered listeners.
 * The values are either strings or Symbols.
 */

 myEmitter.on('eventA', () => {});
 myEmitter.on('eventB', () => {});
 myEmitter.on('eventC', () => {});
 myEmitter.on(Symbol('eventD'), () => {});
 
 // [ 'eventA', 'eventB', 'eventC' ]
 console.log(myEmitter.eventNames());