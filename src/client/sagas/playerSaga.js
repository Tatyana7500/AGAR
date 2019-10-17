import { put, call, takeEvery, fork, select, take, delay } from 'redux-saga/effects';
import * as selectors from '../selectors';
import * as actions from '../actions';
import * as constants from '../../constants';

export default function* watchSaga() {
    yield fork(updatePlayer);
}

export function* updatePlayer() {
    while (true) {
        yield delay(30);
        const mouseXY = yield select(selectors.getMouseXY);
        yield put(actions.updatePlayerCoordinatesStore(mouseXY));
    }
}

// function* setCoordsPlayer(action) {
//     const player = yield select(selectors.getPlayer);
//     player.x = action.payload.x;
//     player.y = action.payload.y;
//     yield put(actions.addSelfPlayerAction(player));
// }