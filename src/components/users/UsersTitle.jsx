import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import style from '../../../style/components/users/usersTitle.css';

const UsersTitle = React.memo(props => {
    return (
        <div className={style.block}>
            <div>Online users</div>
            <div className={style.count}>{props.usersCount}</div>
        </div>
    );
});
UsersTitle.displayName = "UsersTitle";

UsersTitle.propTypes = {
    usersCount: PropTypes.number,
};

UsersTitle.defaultProps = {
    usersCount: 0,
};

const mapStateToProps = state => {
    return {
        usersCount: state.usersReducer.users.length,
    }
};

export default connect(mapStateToProps)(UsersTitle);