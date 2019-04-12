import {
    SET_USERS,
    SET_ME,
    ADD_USER,
    REMOVE_USER,
} from './actionTypes';

export const setUsers = users => {
    return { type: SET_USERS, payload:{users} }
};
export const setMyUser = (userName, userAvatar) => {
    return { type: SET_ME, payload:{userName, userAvatar} }
};
export const addUser = user => {
    return { type: ADD_USER, payload:{user} }
};
export const removeUser = userUID => {
    return { type: REMOVE_USER, payload:{userUID} }
};
