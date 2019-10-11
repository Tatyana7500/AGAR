import { combineReducers } from 'redux';
import usersReducer from './usersReducer';
import foodReducer from './foodReducer';

const rootReducer = combineReducers({
    user: usersReducer,
    food: foodReducer,
});

export default rootReducer;