import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../client/reducers';
import { Provider } from 'react-redux';
import rootSaga from '../client/sagas';
import ReactDOM from 'react-dom';
import './style/index.css';
import React from 'react';
import App from './App';

const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware();

    return {
        ...createStore(rootReducer, applyMiddleware(sagaMiddleware)),
        runSaga: sagaMiddleware.run(rootSaga),
    };
};

const store = configureStore();
window.store = store;

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);