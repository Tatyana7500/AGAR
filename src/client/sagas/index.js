import { all } from 'redux-saga/effects';
import socketSaga from './socketsSaga';

export default function* rootSaga() {
    yield all([
        socketSaga(),
    ]);
}