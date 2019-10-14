import { put, call, takeEvery, fork, select, take } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import history from '../utils/browserHistory';
import * as selectors from '../selectors';
import * as actions from '../actions';
import * as constants from '../../constants';
import { createSocket } from '../utils/socketsHelpers';

let socket = null;
let channel = null;
const X = window.innerWidth;
const Y = window.innerHeight;

export default function* watchSaga() {
    yield takeEvery(constants.AUTH, createPlayer);
    yield fork(channelLoop);
}

function initSocketChannel(player) {
    if (channel) {
        return;
    }

    channel = eventChannel(emitter => {
        socket = createSocket(constants.LOCALHOST, player);

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
}

export const addPlayer = (emitter, data) => {
    emitter(actions.addSelfPlayerAction(data));
    history.push('/main');
};

export function* channelLoop() {
    console.log(channel);
    while (channel) {
        console.log('loop');
        const action = yield take(channel);
        yield put(action);
    }
}

export const model = (emitter, data) => {
    console.log('model', data);
    // console.log(data);
    // let player = data.players.find(item => item.name === 'Sasha');
    // console.log(player);
    //
    // let deltaX = 1950 - X / 2;
    // let deltaY = 1280 - Y / 2;
    // console.log(`deltaX = ${deltaX}`);
    // console.log(`deltaY = ${deltaY}`);
    //
    // const visibleFoods = [];
    //
    // data.foods.map(item => {
    //     item.x -= deltaX;
    //     item.y -= deltaY;
    //
    //     if (item.x > 0 && item.y > 0) {
    //         visibleFoods.push(item);
    //     }
    // });
    // console.log(visibleFoods);
    // emitter(actions.addFoodsToFieldAction(visibleFoods));
};