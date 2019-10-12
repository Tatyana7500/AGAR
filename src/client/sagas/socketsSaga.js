import { put, call, takeEvery, fork, select, take } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import * as actions from '../actions';
import * as constants from '../../constants';
import { createSocket } from '../utils/socketsHelpers';

let socket = null;
let channel = null;

export default function* watchSaga() {
    channel = yield call(initSocketChannel);
    yield fork(channelLoop);
    yield call(createPlayer);
}

function initSocketChannel() {
    if (channel) {
        return;
    }

    channel = eventChannel(emitter => {
        socket = createSocket(constants.LOCALHOST);
        socket.on(constants.FOODS, data => foods(emitter, data));
        socket.on(constants.I_PLAYER, data => player(emitter, data));
        socket.on(constants.PLAYERS, data => players(emitter, data));

        return () => {
            socket.close();

            channel = null;
            socket = null;
        };
    });

    return channel;
}

function createPlayer() {
    const player = {name: 'Tanya', color: '#cccccc'};
    socket.emit(constants.PLAYER, player);
}

export const player = (emitter, data) => {
    console.log(' you player ');
    console.log(data);
};

export const players = (emitter, data) => {
    console.log(' all players ');
    console.log(data);
};

export const foods = (emitter, data) => {
    emitter(actions.addFoodsToFieldAction(data));
};

export function* channelLoop () {
    while (channel){
        const action = yield take(channel);
        yield put(action);
    }
}