import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import Message from './Message';
import MyMessage from './MyMessage';
import InfoMessage from './InfoMessage';

import style from '../../../style/components/messages/messagesList.css';

class MessagesList extends React.Component {
    constructor(props) {
        super(props);

        this.container = React.createRef();
        this.doScrollDown = true;
    }

    shouldComponentUpdate(nextProps) {
        const { messages } = this.props;
        if(nextProps.messages.length!==messages.length) { // if item added or deleted do render
            return true;
        }
        return false;
    }

    componentWillUpdate() {
        const scrollTop = this.container.current.scrollTop;
        const scrollHeight = this.container.current.scrollHeight;
        if((scrollHeight-scrollTop) === 600) {
            this.doScrollDown = true;
        }else{
            this.doScrollDown = false;
        }
    }

    componentDidUpdate() {
        if(this.doScrollDown) {
            this.container.current.scrollTop = this.container.current.scrollHeight;
        }
    }


    render() {
        const { messages } = this.props;
        // Better not to use array index in keys. But in this case messages never changes, so it's ok
        // Messages unique id preferred
        const list = messages.map((msgData, index) => {
            if(msgData.info) {
                return (
                    <InfoMessage
                        key={index}
                        text={msgData.text}
                    />
                )
            }
            let userName = msgData.userName;
            let avatarUrl = msgData.userAvatar;
            if((index-1) > -1) {
                const prevMsgUser = messages[(index-1)].userName;
                if(prevMsgUser===userName) {
                    userName = null;
                    avatarUrl = null;
                }
            }
            if(msgData.isMe) {
                return (
                    <MyMessage
                        key={index}
                        userName={userName}
                        avatarUrl={avatarUrl}
                        text={msgData.msg}
                        time={msgData.time}
                    />
                )
            }else {
                return (
                    <Message
                        key={index}
                        userName={userName}
                        avatarUrl={avatarUrl}
                        text={msgData.msg}
                        time={msgData.time}
                    />
                )
            }
        });

        return (
            <div
                className={style.container}
                ref={this.container}
            >
                <div className={style.list} >
                    {list}
                </div>
            </div>
        );
    }
}

MessagesList.propTypes = {
    messages: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = state => {
    return {
        messages: state.messagesReducer.messages,
    }
};

export default connect(mapStateToProps)(MessagesList);