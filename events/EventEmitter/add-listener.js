const EventEmitter = require('events');
class MyEmitter extends EventEmitter {};
const myEmitter = new MyEmitter();

/*
 * addListener() is an alias for EventEmitter.on()
 * 
 */ 
myEmitter.addListener('event', () => {
  console.log('Event emitted');
});

 myEmitter.emit('event');

