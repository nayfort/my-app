import React from "react";
import {Form, reduxForm} from "redux-form";
import {CreateField, Input, Textarea} from "../../common/FormsControls/FormsControls";
import classes from './ProfileInfo.module.css';
import style from "../../common/FormsControls/FormsControls.module.css";

const ProfileDataForm = ({handleSubmit, profile}) => {
    let error;
    return <Form onSubmit={handleSubmit}>
        <div><button>Save</button></div>
        {error && <div className={style.formSummaryError}>
            {error}
        </div>
        }
        <div>
            <b>Full name:</b> {CreateField("Full name", "fullName", [], Input)}
        </div>
        <div>
            <b>Looking for a job:</b>
            {CreateField("", "lookingForAJob", [], Input, {type: "checkbox"})}
        </div>
            <div>
                <b>My professional skills:</b>
                {CreateField("My skills", "lookingForAJobDescription", [], Textarea)}
            </div>
        <div>
            <b>About me:</b>
            {CreateField("About me", "aboutMe", [], Textarea)}
        </div>
        <div>
            <b>Contacts:</b> {Object.keys(profile.contacts).map(key => {
            return <div key={key} className={classes.contact}><b>{key}: {CreateField(key, "contacts." + key, [], Input)}</b></div>
        })}
        </div>
    </Form>
}

const ProfileDataFormReduxForm = reduxForm ({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataFormReduxForm;