import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {makeConnection} from "./actions/wsActions";

import AvatarSelect from './components/input/AvatarSelect';
import style from '../style/login.css';

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            warningTxt:null,
            loginValue:"",
        };

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

    onClick() {
        const {loginValue} = this.state;

        if(loginValue.length<2) {
            this.setState({
                warningTxt:"Username is too short. Minimum 2 symbols"
            });
            return;
        }
        if(!this.validateLogin(loginValue)) {
            this.setState({
                warningTxt:"Only Latin alphabet, numbers and -_&$.! symbols allowed in username"
            });
            return;
        }

        this.setState({
            warningTxt:null,
        });

        const {makeConnection} = this.props;
        makeConnection(loginValue, this.avatarRef.current.getAvatar());
    }

    handleKeyDown(e) {
        if (e.key === 'Enter') {
            this.onClick();
        }
    }

    validateLogin(nickname) {
        const allowed = new RegExp(/^[A-Za-z0-9-_&$.!]*$/);
        return allowed.test(nickname);
    }

    render() {
        let warningMsg = null;
        const {serverMsg, mayConnect} = this.props;
        const {warningTxt, loginValue} = this.state;

        if(serverMsg) {
            warningMsg = (
                <div className={style.warningMsg}>
                    {serverMsg}
                </div>
            );
        }
        if(warningTxt) {
            warningMsg = (
                <div className={style.warningMsg}>
                    {warningTxt}
                </div>
            );
        }
        const disabled = mayConnect ? null : {disabled:true};

        return (
            <div className={style.window}>
                <p>Select your avatar</p>
                <AvatarSelect ref={this.avatarRef} />
                <input
                    type="text"
                    className={style.inputName}
                    maxLength="30"
                    placeholder="Enter your username"
                    value={loginValue}
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
    makeConnection: PropTypes.func.isRequired,
    mayConnect: PropTypes.bool.isRequired,
    serverMsg: PropTypes.string,
};

Login.defaultProps = {
    serverMsg: null,
};

const mapStateToProps = state => {
    return {
        mayConnect: state.wsReducer.mayConnect,
        serverMsg: state.wsReducer.serverMsg,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        makeConnection: (nickname, avatar) => dispatch(makeConnection(nickname, avatar))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);