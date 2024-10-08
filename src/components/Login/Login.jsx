import React from "react";
import {reduxForm} from "redux-form";
import {CreateField, Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import style from './../common/FormsControls/FormsControls.module.css';

export const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit}>
                {CreateField('Email', 'email', [required], Input)}
                {CreateField('Password', 'password', [required], Input, {type: 'password'})}
                {CreateField(null, 'rememberMe', [], Input, {type: 'checkbox'}, 'Remember me')}

            {captchaUrl && <img src={captchaUrl}/>}
            {captchaUrl && CreateField("Symbols from image", 'captcha', [required], Input, {})}

            {error && <div className={style.formSummaryError}>
                {error}
            </div> }

            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm ({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = data => {
    props.login(data.email, data.password, data.rememberMe, data.captcha)
    }

    if(props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
    </div>
}

const mapStateToProps = (state) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth, authError:state.auth.authError
})

export default connect(mapStateToProps, {login})(Login);
