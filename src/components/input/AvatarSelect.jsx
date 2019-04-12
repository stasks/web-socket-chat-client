import React from 'react';

import style from '../../../style/components/input/avatarSelect.css';

class AvatarSelect extends React.Component {
    constructor() {
        super();

        const items = ["ic_avatar_1", "ic_avatar_2", "ic_avatar_3", "ic_avatar_4"];
        const selected = items[0];

        this.state = {
            items,
            selected
        }

        this.onSelect = this.onSelect.bind(this);
    }

    getAvatar() {
        return this.state.selected;
    }

    onSelect(avatar) {
        if(avatar!==this.state.selected) {
            this.setState({
                selected:avatar
            });
        }
    }

    render() {
        const list = this.state.items.map(item => {
            const variant = this.state.selected===item ? style.avatar+" "+style.selected : style.avatar;
            return (
                <img
                    key={item}
                    src={"./assets/"+ item +".png"}
                    className={variant}
                    onClick={() => this.onSelect(item)}
                />
            );
        });
        return (
            <div className={style.block}>
                {list}
            </div>
        );
    }
}



export default AvatarSelect;