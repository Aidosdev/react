import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';
import Messages from "./Messages/Messages"

const DialogItem = (props) => {
    return (
        <div className={s.item}>
            <NavLink to={`/dialogs/${props.id}`} activeClassName={s.active} className={s.dialogItemFlex}><img src={props.img} />{props.name}</NavLink>
        </div>
    )
}

const Dialogs = (props) => {

    let dialogArData = props.dialogs.map((dialog, index) => {
        return <DialogItem img={dialog.img} name={dialog.name} id={dialog.id} key={index} />
    });

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogArData}
            </div>
            <Messages messages={props.messages} dispatch={props.dispatch} newMessageText={props.newMessageText} />
        </div>
    )
}

export default Dialogs;