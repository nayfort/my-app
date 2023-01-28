import React from "react";
import {Form, reduxForm} from "redux-form";
import {CreateField, Input} from "../../common/FormsControls/FormsControls";
import {LoginForm} from "../../Login/Login";

const ProfileDataForm = ({profile}) => {
    return <Form>
        <div><button onClick={() => {}}>Save</button></div>
        <div>
            <b>Full name:</b> {CreateField("Full name", "fullName", [], Input)}
        </div>
        <div>
            <b>Looking for a job:</b> {profile.lookingForAJob ? 'yes' : 'no'}
        </div>
        {profile.lookingForAJob &&
            <div>
                <b>My professional skills:</b> {profile.lookingForAJobDescription}
            </div>
        }
        <div>
            <b>About me:</b> {profile.aboutMe}
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