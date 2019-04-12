//import {combineReducers} from 'redux';
import wsReducer from './wsReducer';
import messagesReducer from './messagesReducer';
import usersReducer from './usersReducer';

/*
export default combineReducers({
    wsReducer,
    messagesReducer,
    usersReducer
});
*/

// Custom reducer. Messages reducer needs access to users reducer
export default (state = {}, action) => {
    return {
        wsReducer: wsReducer(state.wsReducer, action),
        usersReducer: usersReducer(state.usersReducer, action),

        messagesReducer: messagesReducer(state.messagesReducer, action, state),
    };
};