import {
    SET_USERS,
    SET_ME,
    ADD_USER,
    REMOVE_USER,
} from '../actions/actionTypes';

const initialState = {
    users:[],

    myUserName:null,
    myAvatar:null,
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: action.payload.users,
            };
        case SET_ME:
            return {
                ...state,
                myUserName: action.payload.userName,
                myAvatar: action.payload.userAvatar,
            };
        case ADD_USER:
            return {
                ...state,
                users: [...state.users, action.payload.user],
            };
        case REMOVE_USER:
            return {
                ...state,
                users: state.users.filter(i => i.uid !== action.payload.userUID),
            };
        default:
            return state;
    }
};

export default usersReducer;