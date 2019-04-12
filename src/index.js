import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import App from "./App.jsx";
import WebSocket from "./ws/webSocket";
import rootReducer from './reducers/rootReducer';

const store = createStore(rootReducer);

const config = {
    host: "ws://localhost:8085",
}
const socket = new WebSocket(config.host, store.dispatch);


ReactDOM.render(
    <Provider store={store}>
        <App socket={socket} />
    </Provider>
    , document.getElementById('content'));