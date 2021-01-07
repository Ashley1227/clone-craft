const express = require('express');
const socketIO = require('socket.io');
const http = require('http');

var app = express();
app.use(express.static('client'));

var server = http.createServer(app);
server.listen(3500);

var socket = socketIO(server);

class Config {
    static CHUNK_SIZE = 16;
    static CHUNK_HEIGHT = 32;
    // static RENDER_DISTANCE = 1;
    static UPDATE_INTERVAL = 60;
}

socket.on('connection', function(client) {
    client.on('player-update', function(data) {
        
    });
    console.log(`A client with id ${client.id} connected to server.`);
});