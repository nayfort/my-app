import React from "react";
import classes from './NavBar.module.css';
import {Link} from "react-router-dom";

const NavBar = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <Link to='/profile' className={classes.active}>Profile</Link>
            </div>
            <div className={classes.item}>
                <Link to='/dialogs' className={classes.active}>Messages</Link>
            </div>
            <div className={classes.item}>
                <Link to='/news' className={classes.active}>News</Link>
            </div>
            <div className={classes.item}>
                <Link to='/music' className={classes.active}>Music</Link>
            </div>
            <div className={classes.item}>
                <Link to='/settings' className={classes.active}>Settings</Link>
            </div>
        </nav>
    );
};

export default NavBar;
