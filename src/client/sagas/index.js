import { all } from 'redux-saga/effects';
import modal from './modalSaga';
import socketSaga from './socketsSaga';
import playerSaga from './playerSaga';
import showModelSaga from './showModelSaga';

export default function* rootSaga() {
    yield all([
        socketSaga(),
        playerSaga(),
        showModelSaga(),
        modal(),
    ]);
}