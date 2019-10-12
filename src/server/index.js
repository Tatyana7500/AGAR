const socket = require('socket.io');
const express = require('express');
const bodyParser = require('body-parser');
const constants = require('../constants');
const jsonParser = bodyParser.json();
const Model = require ('./model');

const app = express();
app.use(express.static('dist'));

const server = app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));

const io = socket(server);

const model = new Model();
model.initialize();

io.sockets.on('connection', async socket => {
    await socket.on(constants.PLAYER, (response) => {
        const player = model.createPlayer(response.name, response.color);

        io.sockets.emit(constants.I_PLAYER, player);
    });

    io.sockets.emit(constants.FOODS, model.foods.map(food => food));
    io.sockets.emit(constants.PLAYERS, model.players.map(player => player));
});