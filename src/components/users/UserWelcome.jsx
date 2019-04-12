import React from 'react';
import {connect} from 'react-redux';
import style from '../../../style/components/users/userWelcome.css';

const UserWelcome = React.memo(props => {
    return (
        <span className={style.title}>
            Login as <span className={style.name}>{props.userName}</span>
        </span>
    );
});

const mapStateToProps = state => {
    return {
        userName: state.usersReducer.myUserName,
    }
};

export default connect(mapStateToProps)(UserWelcome);