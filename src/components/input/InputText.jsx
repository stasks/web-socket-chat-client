import React from 'react';

import style from '../../../style/components/input/inputText.css';

class InputText extends React.Component {
    constructor() {
        super();

        this.state = {
            value:""
        }

        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.onClickSend = this.onClickSend.bind(this);
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

    onClickSend() {
        if(this.state.value.length>0) {
            this.props.doSend(this.state.value);
            this.setState({
                value: ""
            });
        }
    }

    render() {

        return (
            <div className={style.block}>
                <div>
                    <input
                        type="text"
                        className={style.input}
                        maxLength="250"
                        placeholder="Type your message..."
                        value={this.state.value}
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
                        <img src="./assets/btn_send.png" />
                    </button>
                </div>
            </div>
        );
    }
}

export default InputText;