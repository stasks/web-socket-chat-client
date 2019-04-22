import {
    MAKE_CONNECTION,
    SEND_MESSAGE,
    MAKE_DISCONNECT,
    MAY_CONNECT,
    LOGIN_UPDATE,
    SERVER_MSG,
} from './actionTypes';

export const makeConnection = (nickname, avatar) => {
    return { type: MAKE_CONNECTION, payload:{nickname, avatar} }
};
export const makeDisconnect = () => {
    return { type: MAKE_DISCONNECT }
};
export const sendMessage = message => {
    return { type: SEND_MESSAGE, payload:{message} }
};
export const mayConnect = bool => {
    return { type: MAY_CONNECT, payload:{bool} }
};
export const updateLogin = loginDone => {
    return { type: LOGIN_UPDATE, payload:{loginDone} }
};
export const serverMsg = msg => {
    return { type: SERVER_MSG, payload:{msg} }
};

