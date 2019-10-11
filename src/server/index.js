const socket = require('socket.io');
const express = require('express');
const bodyParser = require('body-parser');
const constants = require('../constants');
const jsonParser = bodyParser.json();

const app = express();
app.use(express.static('dist'));

const server = app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));

const io = socket(server);

function Client(socketId, name, color) {
    this.socketId = socketId;
    this.name = name;
    this.color = color;
}

const clients = [];

io.sockets.on('connection', async socket => {
    console.log('online');
    socket.on(constants.ONLINE, (res) => {
        clients.push(new Client(socket.id, 'Tanya', 'color'));
        console.log(clients);
        // io.sockets.emit(constants.ONLINE, clients.map(client => client.userId));
    });
    // socket.on(constants.DISCONNECT, () => handleDisconnect(socket));
});

function handleDisconnect(socket) {
    const client = clients.find(item => item.socketId === socket.id);
    const index = clients.indexOf(client);

    if (index > -1) {
        clients.splice(index, 1);
        io.sockets.emit(constants.ONLINE, clients.map(client => client.userId));
    }
}