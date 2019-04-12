import React from 'react';
import PropTypes from 'prop-types';

import style from '../../../style/components/users/user.css';

const User = React.memo(props => {
    const userAvatar = props.userAvatar ? <img src={"./assets/"+props.userAvatar+".png"} /> : null;

    return (
        <div className={style.block} >
            {userAvatar}
            <span>
                {props.userName}
            </span>
        </div>
    );
});

User.propTypes = {
    userName: PropTypes.string.isRequired,
    userAvatar: PropTypes.string,
};

export default User;