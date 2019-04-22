import React from 'react';
import PropTypes from 'prop-types';

import style from '../../../style/components/messages/message.css';

// React.memo instead of standard functional component required for performance optimisation
const InfoMessage = React.memo(props => {
    return (
        <div className={style.block__info}>
            <div className={style.message__info}>
                {props.text}
            </div>
        </div>
    );
});
InfoMessage.displayName = "InfoMessage";

InfoMessage.propTypes = {
    text: PropTypes.string.isRequired,
};

export default InfoMessage;