import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {sendMessage, makeDisconnect} from "./actions/wsActions";

import UserWelcome from './components/users/UserWelcome';
import UsersTitle from './components/users/UsersTitle';
import UsersList from './components/users/UsersList';
import MessagesList from './components/messages/MessagesList';
import InputText from './components/input/InputText';
import style from '../style/app.css';

const Chat = props =>  {
    return (
        <div className={style.app}>
            <div className={style.app__topBar}>
                <div>
                    <UserWelcome />
                </div>
                <div>
                    <button
                        type="button"
                        className={style.disconnectBtn}
                        onClick={() => props.makeDisconnect()}
                    >
                        Disconnect
                    </button>
                </div>
            </div>
            <div className={style.app__grid}>
                <div>
                    <div className={style.block__users}>
                        <UsersTitle />
                        <UsersList />
                    </div>
                    <div className={style.block__chat}>
                        <MessagesList />
                    </div>
                </div>
                <div className={style.app__row2}>
                    <div className={style.block__disconnect} />
                    <div className={style.block__input}>
                        <InputText doSend={msg => props.sendMessage(msg)} />
                    </div>
                </div>
            </div>
        </div>
    );
};
Chat.displayName = "Chat";

Chat.propTypes = {
    makeDisconnect: PropTypes.func.isRequired,
    sendMessage: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => {
    return {
        makeDisconnect: () => dispatch(makeDisconnect()),
        sendMessage: (msg) => dispatch(sendMessage(msg))
    }
};

export default connect(null, mapDispatchToProps)(Chat);