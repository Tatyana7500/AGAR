import { put, fork, select, delay, call } from 'redux-saga/effects';
import * as selectors from '../selectors';
import * as actions from '../actions';

export default function* watchSaga() {
    yield fork(updateLeaderPlayers);
}

export function* updateLeaderPlayers() {
    while (true) {
        yield delay(30);
        const player = yield select(selectors.getPlayer);
        const model = yield select(selectors.getModel);

        const leaders = yield call(createLeadersPlayers, player, model.players);

        yield put(actions.updateLeaderPlayers({ leaders }));
    }
}

export function* createLeadersPlayers(player, players) {
    let leaders = [];

    if (players.length !== 0) {
        if (players.find((item, index) => index < 10 && item.name === player.name)) {
            leaders = players.slice(0, 10);
        } else {
            leaders = players.slice(0, 10);
            leaders.push(players.findIndex(item => item.name === player.name));
            leaders.push(players.filter(item => item.name === player.name));
        }
    }

    return leaders;
}