import {
    MAY_CONNECT,
    LOGIN_UPDATE,
    SERVER_MSG,
} from './actionTypes';

export const mayConnect = bool => {
    return { type: MAY_CONNECT, payload:{bool} }
};
export const updateLogin = loginDone => {
    return { type: LOGIN_UPDATE, payload:{loginDone} }
};
export const serverMsg = msg => {
    return { type: SERVER_MSG, payload:{msg} }
};

