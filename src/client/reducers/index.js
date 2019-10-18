import { combineReducers } from 'redux';
import modelReducer from './modelReducer';
import modalReducer from './modalReducer';
import playerReducer from './playerReducer';
import controlReducer from './controlReducer';
import showModelReducer from './showModelReducer';

const rootReducer = combineReducers({
    model: modelReducer,
    modal: modalReducer,
    player: playerReducer,
    control: controlReducer,
    showModel: showModelReducer,
});

export default rootReducer;