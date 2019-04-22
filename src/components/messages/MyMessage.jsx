import React from 'react';
import PropTypes from 'prop-types';

import style from '../../../style/components/messages/message.css';

// React.memo instead of standard functional component required for performance optimisation
const MyMessage = React.memo(props => {
    const userName = props.userName ?
        <p className={style.name}>
            {props.userName}
        </p> : null;

    const userAvatar = props.avatarUrl ?
        <img
            src={"./assets/"+props.avatarUrl+".png"}
            alt="avatar"
        /> : null;

    return (
        <div className={style.align__right}>
            <div className={style.block+" "+style.block__my}>
                <div className={style.message+" "+style.message__my}>
                    {userName}
                    {props.text}
                    <p className={style.time}>
                        {props.time}
                    </p>
                </div>
                <div className={style.avatar+" "+style.avatar__my}>
                    {userAvatar}
                </div>
            </div>
        </div>
    );
});
MyMessage.displayName = "MyMessage";

MyMessage.propTypes = {
    userName: PropTypes.string,
    avatarUrl: PropTypes.string,
    text: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
};

MyMessage.defaultProps = {
    userName: null,
    avatarUrl: null
};

export default MyMessage;