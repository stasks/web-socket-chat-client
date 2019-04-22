import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import createSagaMiddleware from 'redux-saga';

import App from "./App";
import WebSocket from "./ws/webSocket";
import rootReducer from './reducers/rootReducer';
import { makeConnection, makeDisconnect, sendMessage } from './sagas/wsSagas';


const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
);

const config = {
    host: "ws://localhost:8085",
};
const socket = new WebSocket(config.host, store.dispatch);

sagaMiddleware.run(makeConnection, {socket});
sagaMiddleware.run(makeDisconnect, {socket});
sagaMiddleware.run(sendMessage, {socket});


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('content'));