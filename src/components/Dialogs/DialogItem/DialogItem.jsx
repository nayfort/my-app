import React from "react";
import classes from "./../Dialogs.module.css";
import {Link} from "react-router-dom";

const DialogItem = (props) => {
    return <div className={classes.dialog}>
        <Link to={"/dialogs/" + props.id}>{props.name}</Link>
    </div>
}

export default DialogItem;