const express = require('express');
const socketIO = require('socket.io');
const http = require('http');

var app = express();
app.use(express.static('client'));

var server = http.createServer(app);
server.listen(3500);

var socket = socketIO(server);

socket.on('connection', function(client) {
    client.on('player-update', function(data) {
        client.emit('debug', `A client with id ${client.id} is at x: ${data.x}, and y: ${data.y}.`);
    });
    console.log(`A client with id ${client.id} connected to server.`);
});