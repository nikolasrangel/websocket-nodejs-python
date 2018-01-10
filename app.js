const express = require('express');
const WebSocket = require('ws');
const path = require('path');
const http = require('http');

/* Server port */
const PORT = process.env.PORT || 3746;
const INDEX = path.join(__dirname, 'public');

//.use((req, res) => res.sendFile(INDEX) )

const app = express()
    .use(express.static(path.join(__dirname, 'public')));

// /* Initialize an http server */
const server = http.createServer(app);

/* Initialize the WebSocket server instance */
const wss = new WebSocket.Server({ server });

server.listen(PORT, function listening() {
    console.log('Listening on %d', server.address().port);
  });

/* On any connection */
wss.on('connection', (ws) => {
    /* Store the message from client */
    var messageServer = [];
    var factorialResult = 0;

    /* Connection is OK then add an event */
    ws.on('message', (message) => {
        /* Log the received message */
        console.log(`Message received from client: ${message}`);

        /* Parse the message */
        messageServer = JSON.parse(message);

        /* Generate a python process using nodejs child_process module */
        const spawn = require('child_process').spawn;
        //const py_process = spawn('python3', ["/home/nikolas/codes/websocket-nodejs-python/server/factorial.py"]);
        const py_process = spawn('python3', ["factorial.py"]);

        /* Send the number to py_process */
        py_process.stdin.write(messageServer.number.toString());

        /* Close the stream */
        py_process.stdin.end();

        /* Define what to do on everytime node application receives data from py_process */
        py_process.stdout.on('data', function(data){
            factorialResult = data.toString();
        });
    
        /* At the end, send the result from py_process computing to client */
        py_process.stdout.on('end', function(){
            /* Send the message back to the client */
            ws.send(JSON.stringify({ time: messageServer.time, number: messageServer.number, fact: factorialResult }));
        });

    });
    console.log("Have a connection at port 3746");
});