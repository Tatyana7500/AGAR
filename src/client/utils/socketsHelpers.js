import openSocket from 'socket.io-client';

export const createSocket = (nsp) => {
    return openSocket(nsp);
};