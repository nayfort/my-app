import React from "react";
import classes from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
    if(!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            <div>
                <img src="https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg"></img>
            </div>
            <div className={classes.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                Description
            </div>
        </div>
    );
};

export default ProfileInfo;
