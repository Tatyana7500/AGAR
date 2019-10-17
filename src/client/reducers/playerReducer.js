import * as constants from '../../constants';
import getDeltaXY from '../utils/getDeltaXY';
import config from '../../server/config';

const initialState = {};

export default function (state = initialState, action) {
    switch (action.type) {
        case constants.SET_PLAYER_STORE:
            return {
                ...state,
                ...action.payload,
            };
        case constants.UPDATE_PLAYER_COORDINATES_STORE:
            const { innerWidth: width, innerHeight: height } = window;
            const windowSize = { width, height };
            const {
                fieldWidth,
                fieldHeight,
            } = config;

            const { dx, dy } = getDeltaXY(state, windowSize);
            const deltaX = (state.x - (action.payload.x + dx)) / 10;
            const deltaY = (state.y - (action.payload.y + dy)) / 10;
            const x = state.x - deltaX;
            const y = state.y - deltaY;

            const newState = {
                ...state,
            };

            if (x > 0 && x < fieldWidth) {
                newState.x = x;
            }

            if (y > 0 && y < fieldHeight) {
                newState.y = y;
            }

            return newState;
        default:
            return state;
    }
}