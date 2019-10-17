import { fork, select, all, put, call, delay } from '@redux-saga/core/effects';
import * as selectors from '../selectors';
import * as actions from '../actions';
import * as constants from '../../constants';
import getDeltaXY from '../utils/getDeltaXY';

export default function* watchSaga() {
    yield fork(updateShowModel);
}

export function* updateShowModel() {
    while (true) {
        yield delay(30);

        const model = yield select(selectors.getModel);
        const player = yield select(selectors.getPlayer);
        const showModel = yield call(createShowModel, model, player);

        yield put(actions.setShowModelStore(showModel));
    }
}

export function* createShowModel(model, player) {
    const { innerWidth: width, innerHeight: height } = window;
    const windowSize = { width, height };
    const modelPlayer = model.players.filter(p => p.name === player.name)[0];

    if(!modelPlayer) {
        return {
            foods: [],
            players: [],
        };
    }

    const deltaXY = getDeltaXY(modelPlayer, windowSize);

    const [foods, players] = yield all([
        call(processModelItems, model.foods, deltaXY, windowSize),
        call(processModelItems, model.players, deltaXY, windowSize, constants.PLAYER),
    ]);

    return {
        foods,
        players,
    };
}

export const processModelItems = (modelItems, deltaXY, windowSize, itemType) => {
    const { width, height } = windowSize;
    const { dx, dy } = deltaXY;

    return modelItems.reduce((acc, item) => {
        const { x, y, radius, color, name } = item;
        const showX = x - dx;
        const showY = y - dy;

        if (showX + radius >= 0 && showY + radius >= 0 && showX - radius <= width && showY - radius <= height) {
            const showItem = itemType === constants.PLAYER ?
                { name, x: showX, y: showY, radius, color } :
                { x: showX, y: showY, radius, color };

            acc.push(showItem);
        }

        return acc;
    }, []);
};