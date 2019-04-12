import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';

import Message from './Message.jsx';
import MyMessage from './MyMessage.jsx';
import InfoMessage from './InfoMessage.jsx';
import style from '../../../style/components/messages/messagesList.css';

class MessagesList extends React.Component {
    constructor(props) {
        super(props);

        this.container = React.createRef();
        this.doScrollDown = true;
    }

    shouldComponentUpdate(nextProps, nextState) {
        if(nextProps.messages.length!==this.props.messages.length) { // if item added or deleted do render
            return true;
        }
        return false;
    }

    componentWillUpdate(nextProps, nextState) {
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
        const list = this.props.messages.map((msgData, index) => {
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
                const prevMsgUser = this.props.messages[(index-1)].userName;
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

const mapStateToProps = state => {
    return {
        messages: state.messagesReducer.messages,
    }
};

export default connect(mapStateToProps)(MessagesList);