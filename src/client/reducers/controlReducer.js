import * as constants from '../../constants';

const initialState = {
    mouseXY: { x: 0, y: 0 },
};

export default function (state = initialState, action) {
    switch (action.type) {
        case constants.MOUSE_MOVE:
            return {
                ...state,
                mouseXY: { ...action.payload },
            };
        default:
            return state;
    }
}