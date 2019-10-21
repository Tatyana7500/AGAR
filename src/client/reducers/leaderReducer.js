import * as constants from '../../constants';

const initialState = {
    leaders: [],
};

export default function (state = initialState, action) {
    switch (action.type) {
        case constants.SET_LEADER_PLAYERS_STORE:
            return {
                ...state,
                leaders: action.payload.leaders,
            };
        default:
            return state;
    }
}