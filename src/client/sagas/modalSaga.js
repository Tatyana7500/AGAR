import { takeEvery, put } from 'redux-saga/effects';
import * as constants from '../../constants';
import * as actions from '../actions';

export default function* watchSaga() {
    yield takeEvery(constants.HANDLE_HIDE_MODAL, handleHide);
    yield takeEvery(constants.HANDLE_OPEN_MODAL, handleOpenModal);
}

export function* handleOpenModal(action) {
    yield put(actions.showModalAction({ isOpen: true, modalType: action.payload }));
}

export function* handleHide(action) {
    yield put(actions.showModalAction({ isOpen: false, modalType: '', content: '' }));
}