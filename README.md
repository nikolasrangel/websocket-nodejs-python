# WebSocket + Node.js + Python 3

Example of a simple application using WebSocket and Node.js to create a Python 3 process to calculate the factorial of a number and sending the result to client.


## Client

Simple HTML page with the libraries:

1. jQuery;
2. Bootrap;
3. [ReconnectingWebSocket](https://github.com/joewalnes/reconnecting-websocket): keep the connection alive if eventually is dropped.

## Server

1. Node.js;
2. [Express framework](https://github.com/expressjs/express);
3. Python 3: used to do the dirty work (Python process invoked by Node [child_process module](https://nodejs.org/api/child_process.html))
4. [ws](https://github.com/websockets/ws): a Node.js WebSocket library.

## Usage

Enter:

```
node app.js
```

and navigate to:

[localhost:3746](localhost:3746)
