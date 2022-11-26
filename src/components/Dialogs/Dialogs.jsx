import React from "react";
import classes from "./Dialogs.module.css";
import {Link} from "react-router-dom";

const DialogItem = (props) => {
    return <div className={classes.dialog}>
        <Link to={"/dialogs/" + props.id}>{props.name}</Link>
    </div>
}

const Message = (props) => {
    return <div className={classes.message}>{props.message}</div>
}

const Dialogs = (props) => {

    let dialogsData = [
        {id: 1, name: 'Max'},
        {id: 2, name: 'Vlad'},
        {id: 3, name: 'Jan'},
    ]
    let messagesData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Yo'},
    ]

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
            </div>
            <div className={classes.messages}>
                <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>
                <Message message={messagesData[2].message}/>
            </div>
        </div>
    )
}

export default Dialogs;