const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

/*
 * off(eventName, listener)
 * Alias for emitter.removeListener()
 */
eventEmitter.on('event', () => {
  console.log('event emitted.');
});

eventEmitter.emit('event');
eventEmitter.off('event', (stream) => {
  console.log('event emitted', stream);
});
eventEmitter.emit('event');