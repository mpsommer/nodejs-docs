[Class: http.Agent](https://nodejs.org/dist/latest-v10.x/docs/api/http.html#http_class_http_agent)

Agent: Responsible for managing connectionn persisitence and reuse of HTTP
clients.  Maintains a queue of pending requests for a given host and port, 
reusing a single socket connection for each until the queue is empty.  Then the
socket is either pooled or destroyed depending on the `keepAlive` option.

Poled connections: Are TCP Keep-Alive enabled, but servers may close idle
connections. 

When connection is closed by client or server, it is removed from the pool. 

It is good practice, to destroy() an Agent instance when it is no longer in use, because unused sockets consume OS resources.