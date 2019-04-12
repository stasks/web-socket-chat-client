import {
    ADD_MESSAGE,
    ADD_INFO_MESSAGE,
    CLEAR_MESSAGES,
} from '../actions/actionTypes';

const initialState = {
    messages:[],
};

const messagesReducer = (state = initialState, action, root) => {
    switch (action.type) {
        case CLEAR_MESSAGES:
            return {
                ...state,
                messages: []
            };
            break;
        case ADD_MESSAGE:
            const message = action.payload.message;
            const userName = message.userName;
            // IE doesn't support object.find
            //const userData = root.usersReducer.users.find(user => user.userName === userName);
            const tmpArr = root.usersReducer.users.filter(user => user.userName === userName);
            const userData = tmpArr.length===1 ? tmpArr[0] : null;
            if(userData) {
                message.userAvatar = userData.userAvatar;
            }
            if(message.userName === root.usersReducer.myUserName) {
                message.isMe = true;
            }
            return {
                ...state,
                messages: [...state.messages, message]
            };
        case ADD_INFO_MESSAGE:
            const msgData = {
                info: true,
                text: action.payload.messageText
            }
            return {
                ...state,
                messages: [...state.messages, msgData]
            };
            break;
        default:
            return state;
    }
};

export default messagesReducer;