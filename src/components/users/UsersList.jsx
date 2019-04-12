import React from 'react';
import {connect} from 'react-redux';

import User from './User.jsx';
import style from '../../../style/components/users/usersList.css';

const UsersList = props => {
    const list = props.users.map(user => {
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
}

const mapStateToProps = state => {
    return {
        users: state.usersReducer.users,
    }
};

export default connect(mapStateToProps)(UsersList);