import { takeEvery } from 'redux-saga/effects';
import { MAKE_CONNECTION, MAKE_DISCONNECT, SEND_MESSAGE } from '../actions/actionTypes';

export const sendMessage = function* sendMessage(params) {
    yield takeEvery(SEND_MESSAGE, (action) => {
        params.socket.sendMessage(action.payload.message);
    });
};

export const makeConnection = function* makeConnection(params) {
    yield takeEvery(MAKE_CONNECTION, (action) => {
        params.socket.makeConnection(action.payload.nickname, action.payload.avatar);
    });
};

export const makeDisconnect = function* makeDisconnect(params) {
    yield takeEvery(MAKE_DISCONNECT, () => {
        params.socket.makeDisconnect();
    });
};