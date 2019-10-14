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

    io.sockets.emit(constants.I_PLAYER, player);

    setInterval(sendModel, 10);
    //io.sockets.emit(constants.PLAYERS, model.players.map(player => player));
});

function sendModel() {
    io.sockets.emit(constants.MODEL, model);
}