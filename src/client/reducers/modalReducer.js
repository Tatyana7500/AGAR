import * as constants from '../../constants';

const initialState = {
    isOpen: false,
    content: '',
};

export default function (state = initialState, action) {
    switch (action.type) {
        case constants.SHOW_MODAL:
            return {
                ...state,
                isOpen: action.payload.isOpen, content: action.payload.content,
            };
        default:
            return state;
    }
}