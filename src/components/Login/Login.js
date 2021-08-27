import React from 'react';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { useDispatch, useSelector } from 'react-redux';

import { Input } from '../common/FormsControl/FormsControl';
import { required, maxLengthCreator } from '../../utils/validators';
import { login } from '../../redux/auth-reducer';

import './Login.css';

const maxLength = maxLengthCreator(30)

const LoginForm = (props) => {

  const { handleSubmit } = props

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          name="email"
          component={Input}
          placeholder="Email"
          validate={[required, maxLength]}
        />
      </div>

      <div>
        <Field
          name="password"
          component={Input}
          placeholder="Password"
          type="password"
          validate={[required, maxLength]}
        />
      </div>

      <div>
        <Field
          name="rememberMe"
          component={Input}
          type="checkbox"
        /> remember me
      </div>

      {
        props.error &&
        <div className="login-error">
          {props.error}
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