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

}

function initSocketChannel() {
    if (channel) {
        return;
    }

    channel = eventChannel(emitter => {
        socket = createSocket(constants.LOCALHOST);
        socket.on(constants.FOODS, data => foods(emitter, data));

        return () => {
            socket.close();

            channel = null;
            socket = null;
        };
    });

    return channel;
}

export const foods = (emitter, data) => {
    emitter(actions.addFoodsToFieldAction(data));
};

export function* channelLoop () {
    while (channel){
        const action = yield take(channel);
        yield put(action);
    }
}