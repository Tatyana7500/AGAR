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