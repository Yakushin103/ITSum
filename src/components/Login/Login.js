import React from 'react';
import { Redirect } from 'react-router-dom';
import { reduxForm } from 'redux-form';
import { useDispatch, useSelector } from 'react-redux';

import { Input, CreateField } from '../common/FormsControl/FormsControl';

import { required, maxLengthCreator } from '../../utils/validators';
import { login } from '../../redux/auth-reducer';

import './Login.css';

const maxLength = maxLengthCreator(30)

const LoginForm = ({ handleSubmit, error, captchaUrl }) => {
  console.log();

  return (
    <form onSubmit={handleSubmit}>
      {
        CreateField("Email", "email", [required, maxLength], Input, "email")
      }

      {
        CreateField("Password", "password", [required, maxLength], Input, "password")
      }

      {
        CreateField(null, "rememberMe", [], Input, "checkbox", "remember Me")
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
            CreateField("Captcha",
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

const LoginReduxForm = reduxForm({
  form: 'login'
})(LoginForm)

const Login = () => {
  const dispatch = useDispatch()
  const isAuth = useSelector((state) => state.auth.isAuth)
  const captchaUrl = useSelector((state) => state.auth.captchaUrl)

  const onSubmit = (formData) => {
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