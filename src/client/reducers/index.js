import { combineReducers } from 'redux';
import modelReducer from './modelReducer';
import modalReducer from './modalReducer';
import leaderReducer from './leaderReducer';
import playerReducer from './playerReducer';
import controlReducer from './controlReducer';
import showModelReducer from './showModelReducer';

const rootReducer = combineReducers({
    model: modelReducer,
    modal: modalReducer,
    player: playerReducer,
    leaders: leaderReducer,
    control: controlReducer,
    showModel: showModelReducer,
});

export default rootReducer;