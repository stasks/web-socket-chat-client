import {
    ADD_MESSAGE,
    ADD_INFO_MESSAGE,
    CLEAR_MESSAGES,
} from './actionTypes';

export const clearMessages = () => {
    return { type: CLEAR_MESSAGES }
};
export const addMessage = message => {
    return { type: ADD_MESSAGE, payload:{message} }
};
export const addInfoMessage = messageText => {
    return { type: ADD_INFO_MESSAGE, payload:{messageText} }
};
