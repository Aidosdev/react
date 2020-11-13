import React from 'react';
import Message from './Message/Message';
import s from './Messages.module.css';
import { addNewMessageCreator, updateNewMessageCreator } from './../../../../redux/dialog-reducer';

const Messages = (props) => {
    let messagesArData = props.messages.map((message, index) => {
        return <Message message={message.message} key={index} />
    })

    let addSendMessage = () => {
        props.dispatch(addNewMessageCreator());
    }

    let updateSendMessage = (event) => {
        props.dispatch(updateNewMessageCreator(event.target.value));
    }

    return (
        <div className={s.messages}>
            <div>{messagesArData}</div>
            <div>
                <div><textarea onChange={updateSendMessage} value={props.newMessageText} placeholder="Write new message"></textarea></div>
                <div><button onClick={addSendMessage}>Send</button></div>
            </div>

        </div>
    )
}

export default Messages;


