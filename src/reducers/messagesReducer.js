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
        case ADD_MESSAGE:
            var message = action.payload.message;
            var userName = message.userName;
            // IE doesn't support object.find
            //const userData = root.usersReducer.users.find(user => user.userName === userName);
            var tmpArr = root.usersReducer.users.filter(user => user.userName === userName);
            var userData = tmpArr.length===1 ? tmpArr[0] : null;
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
            var msgData = {
                info: true,
                text: action.payload.messageText
            };
            return {
                ...state,
                messages: [...state.messages, msgData]
            };
        default:
            return state;
    }
};

export default messagesReducer;