import React from 'react';
import PropTypes from 'prop-types';
import style from '../../../style/components/messages/message.css';

// React.memo instead of standard functional component required for performance optimisation
const Message = React.memo(props => {
    const userName = props.userName ? <p className={style.name}>{props.userName}</p> : null;
    const userAvatar = props.avatarUrl ? <img src={"./assets/"+props.avatarUrl+".png"} /> : null;

    return (
        <div className={style.block}>
            <div className={style.avatar}>
                {userAvatar}
            </div>
            <div className={style.message}>
                {userName}
                {props.text}
                <p className={style.time}>
                    {props.time}
                </p>
            </div>
        </div>
    );
});

Message.propTypes = {
    name: PropTypes.string,
    userAvatar: PropTypes.string,
    text: PropTypes.string.isRequired,
    time: PropTypes.string,
};

export default Message;