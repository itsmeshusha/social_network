import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import {Input} from "../FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/authReducer";


type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}



const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        
        <form onSubmit={props.handleSubmit} >
            <div>
                <Field placeholder={"Email"}
                       name={"email"}
                       component={Input}
                       validate={[required]} />
            </div>
            <div>
                <Field placeholder={"Password"}
                       name={"password"}
                       component={Input}
                       validate={[required]} />
            </div>
            <div>
                <Field type="checkbox"
                       name={"rememberMe"}
                       component={Input}
                       validate={[required]} /> Remember me
            </div>
            <button>Login</button>
        </form>
    )
}

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'}) (LoginForm)

const Login = (props: any) => {
    const onSubmit = (formData: FormDataType) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
}

export default connect(null, {login})(Login);