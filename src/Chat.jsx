import React from 'react';
import PropTypes from 'prop-types';

import UserWelcome from './components/users/UserWelcome.jsx';
import UsersTitle from './components/users/UsersTitle.jsx';
import UsersList from './components/users/UsersList.jsx';
import MessagesList from './components/messages/MessagesList.jsx';
import InputText from './components/input/InputText.jsx';
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
                        onClick={() => props.socket.doDisconnect()}
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
                    <div className={style.block__disconnect}/>
                    <div className={style.block__input}>
                        <InputText doSend={msg => props.socket.sendMessage(msg)} />
                    </div>
                </div>
            </div>
        </div>
    );
}

Chat.propTypes = {
    socket: PropTypes.object.isRequired,
}

export default Chat;