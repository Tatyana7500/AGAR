import { put, call, fork, select, take, delay } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import history from '../utils/browserHistory';
import * as selectors from '../selectors';
import * as actions from '../actions';
import * as constants from '../../constants';
import { createSocket } from '../utils/socketsHelpers';

let socket = null;
let channel = null;

export default function* watchSaga() {
    const player = yield take(constants.AUTH);
    yield call(createPlayer, player);
}

function initSocketChannel(player) {
    if (channel) {
        return;
    }

    channel = eventChannel(emitter => {
        socket = createSocket(constants.LOCALHOST, player);

        // if (socket.disconnected) {
        //     errorAuth(emitter, player.name);
        // }

        socket.on(constants.I_PLAYER, data => addPlayer(emitter, data));
        socket.on(constants.MODEL, data => model(emitter, data));

        return () => {
            socket.close();

            channel = null;
            socket = null;
        };
    });

    return channel;
}

function* createPlayer(action) {
    channel = yield call(initSocketChannel, action.payload);
    yield fork(channelLoop);
    yield fork(updatePlayerServer);
}

export const addPlayer = (emitter, data) => {
    emitter(actions.setPlayerStore(data));
    history.push('/main');
};

export const errorAuth = (emitter, name) => {
    emitter(actions.showModalAction({ isOpen: true, content: `Player with that name ${name} already exists!` }));
};

export function* channelLoop() {
    while (channel) {
        const action = yield take(channel);
        yield put(action);
    }
}

export function* updatePlayerServer() {
    while (channel) {
        yield delay(30);
        const player = yield select(selectors.getPlayer);
        socket.emit(constants.SEND_COORDS, player);
    }
}

export const model = (emitter, data) => {
    emitter(actions.setModelStore(data));
};

