const socket = require('socket.io');
const express = require('express');
const bodyParser = require('body-parser');
const constants = require('../constants');
const jsonParser = bodyParser.json();
const Model = require('./model');

const app = express();
app.use(express.static('dist'));

const server = app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));

const io = socket(server);

const model = new Model();
model.initialize();
model.start();

io.sockets.on('connection', async socket => {
    const player = model.createPlayer(socket.handshake.query.name, socket.handshake.query.color);
    const mySocketId = io.sockets.connected[socket.id];

    if (player) {
        mySocketId && mySocketId.emit(constants.I_PLAYER, player);
    } else {
        socket.disconnect();
    }

    setInterval(sendModel, 30);

    socket.on(constants.SEND_COORDS, setCoordsPlayer);
    socket.on(constants.DISCONNECT, () => handleDisconnect(socket));
});

function handleDisconnect(socket) {
    model.deletePlayer(socket.handshake.query.name);
}

function sendModel() {
    io.sockets.emit(constants.MODEL, model);
}

function setCoordsPlayer(player) {
    model.changeCoordsPlayer(player);
}