import * as constants from '../../constants';

const initialState = {
    foods: [],
    players: [],
};

export default function (state = initialState, action) {
    switch (action.type) {
        case constants.SET_SHOW_MODEL_STORE:
            return {
                ...action.payload,
            };
        default:
            return state;
    }
}