import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import Login from './Login';
import Chat from './Chat';

const App = props => {
    if(props.loginDone) {
        return <Chat />
    }else{
        return <Login />
    }
};
App.displayName = "App";

App.propTypes = {
    loginDone: PropTypes.bool.isRequired,
};

const mapStateToProps = state => {
    return {
        loginDone: state.wsReducer.loginDone,
    }
};

export default connect(mapStateToProps)(App);