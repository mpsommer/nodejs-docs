const EventEmitter = require('events');
class MyEmitter extends EventEmitter {};
const myEmitter1 = new MyEmitter();
const myEmitter2 = new MyEmitter();
let count = 0;
let defaultMaxListeners = 10;
/*
 * Uncommenting the line below removes all MaxListenersExceededWarnings.
 * This sets the global defaultMaxListeners for all EventEmitter instances.
 */
// EventEmitter.defaultMaxListeners = 15;

////////////////    defaultMaxListeners    ////////////////
/*
 * The maximum default amount of listeners to be registered
 * to a single event is 10.
 * defaultMaxListeners changes the default of all EventEmitter instances.
 * Affects all EventEmitters including ones created before defaultMaxListeners called.
 * setMaxListeners(n) Changes the default for an individual EventEmitters.
 * setMaxListeners(n) has precedence over defaultMaxListeners.
 */
for (let index = 0; index < defaultMaxListeners + 1; index++) {
  myEmitter1.on('event1', () => {
    console.log('event1 emitted. Response from listenter', ++count);
  });
  /*
   * Outputs:
   * event1 emitted. Response from listenter 1
   * ...
   * event1 emitted. Response from listenter 11
   * (node:39628) MaxListenersExceededWarning: Possible EventEmitter memory leak detected. 
   * 11 event1 listenersadded. Use emitter.setMaxListeners() to increase limit
   */
}
myEmitter1.emit('event1');

////////////////        setMaxListeners()        ////////////////
/*
 * Sets the max listeners for an individual emitter.
 * Overrides the defaultMaxListeners assignment in line 11.
 */
myEmitter2.setMaxListeners(11);
for (let index = 0; index < defaultMaxListeners + 1; index++) {
  count = 0;
  myEmitter2.on('event2', () => {
    console.log('event2 emitted. Response from listenter', ++count);
  });
    /*
   * Outputs:
   * event2 emitted. Response from listenter 1
   * ...
   * event2 emitted. Response from listenter 11
   */
}
myEmitter2.emit('event2');

////////////////        getMaxListeners()        ////////////////
/*
 * getMaxListeners()
 * Returns: <integer>
 * Returns the current max listener value for the EventEmitter which is 
 * either set by emitter.setMaxListeners(n) or defaults to 
 * EventEmitter.defaultMaxListeners.
 */
console.log('myEmitter1 max listener count:', myEmitter1.getMaxListeners());
console.log('myEmitter2 max listener count:', myEmitter2.getMaxListeners());
