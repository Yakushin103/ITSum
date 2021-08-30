import React from 'react';
import { Redirect } from 'react-router-dom';
import { reduxForm } from 'redux-form';
import { useDispatch, useSelector } from 'react-redux';

import { Input, CreateField } from '../common/FormsControl/FormsControl';

import { required, maxLengthCreator } from '../../utils/validators';
import { login } from '../../redux/auth-reducer';

import './Login.css';

const maxLength = maxLengthCreator(30)

const LoginForm = ({ handleSubmit, error }) => {

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

  const onSubmit = (formData) => {
    let { email, password, rememberMe } = formData
    dispatch(login(email, password, rememberMe))
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
      />
    </div>
  )
}

export default Login;