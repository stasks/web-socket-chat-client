import React from 'react';
import {connect} from 'react-redux';
import style from '../../../style/components/users/usersTitle.css';

const UsersTitle = React.memo(props => {
    return (
        <div className={style.block}>
            <div>Online users</div>
            <div className={style.count}>{props.usersCount}</div>
        </div>
    );
});

const mapStateToProps = state => {
    return {
        usersCount: state.usersReducer.users.length,
    }
};

export default connect(mapStateToProps)(UsersTitle);