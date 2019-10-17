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

io.sockets.on('connection', async socket => {
    const player = model.createPlayer(socket.handshake.query.name, socket.handshake.query.color);

    if (player) {
        const mySocketId = io.sockets.connected[socket.id];
        mySocketId && mySocketId.emit(constants.I_PLAYER, player);
    }

    setInterval(sendModel, 33);

    socket.on(constants.SEND_COORDS, setCoordsPlayer);
});

function sendModel() {
    io.sockets.emit(constants.MODEL, model);
}

function setCoordsPlayer(player) {
    model.changeCoordsPlayer(player);
}