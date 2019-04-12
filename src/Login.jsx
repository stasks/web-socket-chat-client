import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import UsersTitle from './components/users/UsersTitle.jsx';
import AvatarSelect from './components/input/AvatarSelect.jsx';
import InputText from './components/input/InputText.jsx';
import style from '../style/login.css';

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            warning:null,
            loginValue:"",
        }

        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.onClick = this.onClick.bind(this);
        this.onChange = this.onChange.bind(this);
        this.avatarRef = React.createRef();
    }

    onChange(e) {
        this.setState({
            loginValue:e.target.value
        });
    }

    handleKeyDown(e) {
        if (e.key === 'Enter') {
            this.onClick();
        }
    }

    onClick() {
        if(this.state.loginValue.length<2) {
            this.setState({
                warning:"Username is too short. Minimum 2 symbols"
            });
            return;
        }
        if(!this.validateLogin(this.state.loginValue)) {
            this.setState({
                warning:"Only Latin alphabet, numbers and -_&$.! symbols allowed in username"
            });
            return;
        }

        this.setState({
            warning:null,
        });

        this.props.socket.makeConnection(this.state.loginValue, this.avatarRef.current.getAvatar());
    }

    validateLogin(nickname) {
        const allowed = new RegExp(/^[A-Za-z0-9-_&$.!]*$/);
        return allowed.test(nickname);
    }

    render() {
        let warningMsg = null;
        if(this.props.serverMsg!==null) {
            warningMsg = (
                <div className={style.warningMsg}>
                    {this.props.serverMsg}
                </div>
            );
        }
        if(this.state.warning!==null) {
            warningMsg = (
                <div className={style.warningMsg}>
                    {this.state.warning}
                </div>
            );
        }
        const disabled = this.props.mayConnect ? null : {disabled:true};

        return (
            <div className={style.window}>
                <p>Select your avatar</p>
                <AvatarSelect ref={this.avatarRef} />
                <input
                    type="text"
                    className={style.inputName}
                    maxLength="30"
                    placeholder="Enter your username"
                    value={this.state.loginValue}
                    onKeyDown={this.handleKeyDown}
                    onChange={this.onChange}
                />
                <button
                    type="button"
                    className={style.loginBtn}
                    onClick={this.onClick}
                    {...disabled}
                >
                    Login
                </button>
                {warningMsg}
            </div>
        );
    }
}

Login.propTypes = {
    socket: PropTypes.object.isRequired,
}

const mapStateToProps = state => {
    return {
        mayConnect: state.wsReducer.mayConnect,
        serverMsg: state.wsReducer.serverMsg,
    }
};

export default connect(mapStateToProps)(Login);