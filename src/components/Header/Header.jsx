import React from "react";
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
  return (
    <header className={classes.header}>
      <img src="https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014__340.jpg"></img>

        <div className={classes.loginBlock}>
            {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink> }
        </div>
    </header>
  );
};

export default Header;
