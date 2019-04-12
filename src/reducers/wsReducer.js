import {
    MAY_CONNECT,
    LOGIN_UPDATE,
    SERVER_MSG,
} from '../actions/actionTypes';

const initialState = {
    mayConnect:true,
    loginDone:false,

    serverMsg:null,
};

const wsReducer = (state = initialState, action) => {
    switch (action.type) {
        case MAY_CONNECT:
            return {
                ...state,
                mayConnect: action.payload.bool,
            };
        case LOGIN_UPDATE:
            return {
                ...state,
                loginDone: action.payload.loginDone,
            };
        case SERVER_MSG:
            return {
                ...state,
                serverMsg: action.payload.msg,
            };
        default:
            return state;
    }
};

export default wsReducer;