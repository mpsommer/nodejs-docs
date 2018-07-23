const EventEmitter = require('events');
const myEmitter = new EventEmitter();

/*
 * listeners(eventName)
 * Returns a copy of the array of listeners for the 
 * event named eventName.
 * 
 */

myEmitter.on('event', () => {
  console.log('hey');
});

let arrayCopy = myEmitter.listeners('event');
arrayCopy.forEach((element) => {
  // [Function]
  console.log(element);
});
