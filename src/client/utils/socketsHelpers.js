import openSocket from 'socket.io-client';

export const createSocket = (nsp, player) => {
    return openSocket(nsp, { query: `name=${player.name}&color=${player.color}` });
};