import {mayConnect, updateLogin, serverMsg} from "../actions/wsActions";
import {setUsers, setMyUser, addUser, removeUser} from "../actions/usersActions";
import {addMessage, addInfoMessage, clearMessages} from "../actions/messagesActions";

export default class webSocket {
    constructor(host, dispatch) {
        this.host = host;
        this.dispatch = dispatch;
        this.ws = null;
    }

    makeConnection(userName, userAvatar) {
        this.dispatch(serverMsg(null));
        this.dispatch(mayConnect(false));

        const ws = new WebSocket(this.host);
        this.ws = ws;

        ws.addEventListener('open', event => {
            console.log("opened");

            const data = {
                $type: "login",
                userName,
                userAvatar,
            }
            ws.send(JSON.stringify(data));
        });

        ws.addEventListener('close', event => {
            this.dispatch(mayConnect(true));
            this.dispatch(updateLogin(false));
            this.dispatch(clearMessages());
        });

        ws.addEventListener('error', event => {
            this.dispatch(mayConnect(true));
            this.dispatch(updateLogin(false));
            this.dispatch(serverMsg("Server unavailable."));
        });

        ws.addEventListener('message', event => {
            const json = JSON.parse(event.data);

            switch(json.$type) {
                case "login_failed":
                    ws.close();
                    this.dispatch(serverMsg(json.msg));
                    break;
                case "login_successful":
                    this.dispatch(updateLogin(true));
                    this.dispatch(setMyUser(json.user.userName, json.user.userAvatar));
                    break;
                case "users_list":
                    this.dispatch(setUsers(json.users));
                    break;
                case "user_add":
                    this.dispatch(addUser(json.user));
                    const msg = json.user.userName + ' has joined this chat';
                    this.dispatch(addInfoMessage(msg));
                    break;
                case "user_remove":
                    this.dispatch(removeUser(json.userUID));
                    this.dispatch(addInfoMessage(json.reasonMsg));
                    break;
                case "server_msg":
                    this.dispatch(serverMsg(json.msg));
                    break;
                case "msg":
                    this.dispatch(addMessage(json.data));
                    break;
            }
        });
    }

    sendMessage(msg) {
        if(this.ws && this.ws.readyState === 1) {
            const data = {
                $type: "msg",
                msg,
            }
            this.ws.send(JSON.stringify(data));
        }
    }

    doDisconnect() {
        if(this.ws) this.ws.close();
    }
}