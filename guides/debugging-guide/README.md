## Notes:
When a node application is started with the --inspect switch, a Nodejs process
listens view Websockets for diagnostic [commands](https://chromedevtools.github.io/debugger-protocol-viewer/v8/).

Default host and port is 127.0.0.1:9229. Each process is assigned a uuid.

host, port, and uuid must be specified to connect to the Websocket interface.
HTTP request to `http://[host:port]/json/list.` will return a JSON object
providing metadata about the debugee.

Exposing the debug port publicly is unsafe.