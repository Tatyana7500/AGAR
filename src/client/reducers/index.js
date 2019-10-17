import { combineReducers } from 'redux';
import modelReducer from './modelReducer';
import playerReducer from './playerReducer';
import showModelReducer from './showModelReducer';
import controlReducer from './controlReducer';

const rootReducer = combineReducers({
    model: modelReducer,
    player: playerReducer,
    control: controlReducer,
    showModel: showModelReducer,
});

export default rootReducer;