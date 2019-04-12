import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import Login from './Login.jsx';
import Chat from './Chat.jsx';

const App = props => {
    if(props.loginDone) {
        return <Chat socket={props.socket} />
    }else{
        return <Login socket={props.socket} />
    }
}

const mapStateToProps = state => {
    return {
        loginDone: state.wsReducer.loginDone,
    }
};

App.propTypes = {
    socket: PropTypes.object.isRequired,
}

export default connect(mapStateToProps)(App);