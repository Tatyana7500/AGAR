import * as constants from '../../constants';

const initialState = {
    players: [],
    player: {},

};

export default function (state = initialState, action) {
    switch (action.type) {
        case constants.I_PLAYER:
            console.log(action.type);
            return {
                ...state,
                player: action.payload,
            };
        default:
            return state;
    }
}