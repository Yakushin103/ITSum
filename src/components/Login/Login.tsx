import React from 'react';
import { Redirect } from 'react-router-dom';
import { reduxForm, InjectedFormProps } from 'redux-form';
import { useDispatch, useSelector } from 'react-redux';

import { Input, CreateField } from '../common/FormsControl/FormsControl';

import { required, maxLengthCreator } from '../../utils/validators';
import { login } from '../../redux/auth-reducer';
import { AppDispatch, AppStateType } from '../../redux/redux-store'

import './Login.css';

const maxLength = maxLengthCreator(30)

type FormType = {
  email: string,
  password: string,
  rememberMe: boolean,
  captcha: string
}

export type LoginFormPropertiesType = Extract<keyof FormType, string> 

type OwnProps = {
  captchaUrl: string | null
}

const LoginForm: React.FC<InjectedFormProps<FormType, OwnProps> & OwnProps> = ({
  handleSubmit,
  error,
  captchaUrl }) => {

  return (
    <form onSubmit={handleSubmit}>
      {
        CreateField<LoginFormPropertiesType>("Email", "email", [required, maxLength], Input, "email")
      }

      {
        CreateField<LoginFormPropertiesType>("Password", "password", [required, maxLength], Input, "password")
      }

      {
        CreateField<LoginFormPropertiesType>(undefined, "rememberMe", [], Input, "checkbox", "remember Me")
      }

      {
        error &&
        <div className="login-error">
          {error}
        </div>
      }

      {
        captchaUrl &&
        <>
          <img src={captchaUrl} alt="Captcha" />
          {
            CreateField<LoginFormPropertiesType>("Captcha",
              "captcha",
              [required],
              Input)}
        </>
      }

      <div>
        <button>
          Login
        </button>
      </div>
    </form>
  )
}

const LoginReduxForm = reduxForm<FormType, OwnProps>({
  form: 'login'
})(LoginForm)

const Login = () => {
  const dispatch = useDispatch()
  const isAuth = useSelector((state: AppStateType) => state.auth.isAuth)
  const captchaUrl = useSelector((state: AppStateType) => state.auth.captchaUrl)

  const onSubmit = (formData: FormType) => {
    let { email, password, rememberMe, captcha } = formData
    dispatch(login(email, password, rememberMe, captcha))
  }

  if (isAuth) {
    return <Redirect to={"/profile"} />
  }

  return (
    <div>
      <h1>
        Login
      </h1>

      <LoginReduxForm
        onSubmit={onSubmit}
        captchaUrl={captchaUrl}
      />
    </div>
  )
}

export default Login;