import * as constants from '../../constants';

const initialState = {
    foods: [],
};

export default function (state = initialState, action) {
    switch (action.type) {
        case constants.FOODS:
        return {
            ...state,
            foods: action.payload,
        }
        default:
            return state;
    }
}