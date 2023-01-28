import React from "react";
import {Form, reduxForm} from "redux-form";
import {CreateField, Input, Textarea} from "../../common/FormsControls/FormsControls";

const ProfileDataForm = ({profile, handleSubmit}) => {
    return <Form onSubmit={handleSubmit}>
        <div><button>Save</button></div>
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
            <b>About me:</b> {profile.aboutMe}
            {CreateField("About me", "aboutMe", [], Textarea)}
        </div>
        {/*<div>*/}
        {/*    <b>Contacts:</b> {Object.keys(profile.contacts).map(key => {*/}
        {/*    return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>*/}
        {/*})}*/}
        {/*</div>*/}
    </Form>
}

const ProfileDataFormReduxForm = reduxForm ({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataFormReduxForm;