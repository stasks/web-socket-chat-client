import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import User from './User';
import style from '../../../style/components/users/usersList.css';

const UsersList = ({users}) => {
    const list = users.map(user => {
        return(
            <User
                key={user.uid}
                userName={user.userName}
                userAvatar={user.userAvatar}
            />
        )
    });

    return (
        <div className={style.container} >
            {list}
        </div>
    );
};
UsersList.displayName = "UsersList";

UsersList.propTypes = {
    users: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = state => {
    return {
        users: state.usersReducer.users,
    }
};

export default connect(mapStateToProps)(UsersList);