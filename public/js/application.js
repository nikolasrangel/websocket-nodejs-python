/* Using the reconnecting-websocket library to automatically reconnect any disrupted connections in the browser */
var HOST = location.origin.replace(/^http/, 'ws');
var ws = new WebSocket(HOST);

/* Function which aims to handle receive messages from server */
ws.onmessage = function(message) {
    var data = JSON.parse(message.data);
    $("#chat-text").append("<div class='panel panel-default'><div class='panel-heading'>" + $('<span/>').text(data.time).html() + "</div><div class='panel-body'>" + $('<span/>').text(`Factorial of ${data.number} is ${data.fact}`).html() + "</div></div>");
    $("#chat-text").stop().animate({
      scrollTop: $('#chat-text')[0].scrollHeight
    }, 800);
};

/* Function which aims to send messages to server */
$("#input-form").on("submit", function(event) {
    /* Stop the form from actually sending a POST */
    event.preventDefault();
    /* Grab the number from the form and send it to the server */
    var handle = $("#input-handle")[0].value;
    ws.send(JSON.stringify({ number: handle, time: new Date().toLocaleTimeString() }));
    $("#input-handle")[0].value = "";
});