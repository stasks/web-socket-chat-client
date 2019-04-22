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
        };

        this.onSelect = this.onSelect.bind(this);
    }

    onSelect(avatar) {
        const {selected} = this.state;
        if(avatar !== selected) {
            this.setState({
                selected:avatar
            });
        }
    }

    getAvatar() {
        const {selected} = this.state;
        return selected;
    }

    render() {
        const {selected, items} = this.state;
        const list = items.map(item => {
            const variant = selected===item ? style.avatar+" "+style.selected : style.avatar;
            return (
                <div
                    key={item}
                    role="presentation"
                    className={variant}
                    onKeyDown={() => this.onSelect(item)}
                    onClick={() => this.onSelect(item)}
                >
                    <img
                        alt="avatar"
                        src={"./assets/"+ item +".png"}
                    />
                </div>
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