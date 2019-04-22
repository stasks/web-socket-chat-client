import React from 'react';
import PropTypes from 'prop-types';

import style from '../../../style/components/input/inputText.css';

class InputText extends React.Component {
    constructor() {
        super();

        this.state = {
            value:""
        };

        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.onClickSend = this.onClickSend.bind(this);
        this.inputField = React.createRef();
    }

    onClickSend() {
        const {value} = this.state;
        if(value.length>0) {
            const { doSend } = this.props;
            doSend(value);
            this.setState({
                value: ""
            });
        }
        this.inputField.current.focus();
    }

    handleChange(e) {
        this.setState({
            value: e.target.value
        });
    }

    handleKeyDown(e) {
        if (e.key === 'Enter') {
            this.onClickSend();
        }
    }

    render() {
        const {value} = this.state;

        return (
            <div className={style.block}>
                <div>
                    <input
                        type="text"
                        className={style.input}
                        maxLength="250"
                        placeholder="Type your message..."
                        value={value}
                        ref={this.inputField}
                        onKeyDown={this.handleKeyDown}
                        onChange={this.handleChange}
                    />
                </div>
                <div>
                    <button
                        type="button"
                        className={style.btn_send}
                        onClick={this.onClickSend}
                    >
                        <img
                            src="./assets/btn_send.png"
                            alt="Send"
                        />
                    </button>
                </div>
            </div>
        );
    }
}

InputText.propTypes = {
    doSend: PropTypes.func.isRequired
};

export default InputText;