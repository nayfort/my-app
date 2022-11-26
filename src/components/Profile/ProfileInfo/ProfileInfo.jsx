import React from "react";
import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg"></img>
            </div>
            <div className={classes.descriptionBlock}>ava + description</div>
        </div>
    );
};

export default ProfileInfo;
