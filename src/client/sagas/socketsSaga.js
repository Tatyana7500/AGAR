import { put, call, takeEvery, fork, select, take } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import * as actions from '../actions';
import * as constants from '../../constants';
import { createSocket } from '../utils/socketsHelpers';

let socket = null;
let channel = null;

export default function* watchSaga() {
    channel = yield call(initSocketChannel);
    yield takeEvery(sendOnline);
}

function initSocketChannel() {
    if (channel) {
        return;
    }

    channel = eventChannel(emitter => {
        socket = createSocket(constants.LOCALHOST);

        return () => {
            socket.close();

            channel = null;
            socket = null;
        };
    });

    return channel;
}

function* sendOnline() {
    if (!socket || !channel) {
        return;
    }

    const userId = 1;
    socket.emit(constants.ONLINE, userId);
}