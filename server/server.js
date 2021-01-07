const express = require('express');
const socketIO = require('socket.io');
const http = require('http');

const Config = require('./Config');
const ServerChunk = require('./ServerChunk');

new ServerChunk();

var app = express();
app.use(express.static('client'));

var server = http.createServer(app);
server.listen(3500);

var socket = socketIO(server);

socket.on('connection', function(client) {
    client.on('player-update', function(data) {

    });
    console.log(`A client with id ${client.id} connected to server.`);
});