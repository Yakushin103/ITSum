import React from 'react';
import { Field, reduxForm } from 'redux-form';

const LoginForm = (props) => {

  const { handleSubmit } = props

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          name="login"
          component="input"
          placeholder="Login"
        />
      </div>

      <div>
        <Field
          name="password"
          component="input"
          placeholder="Password"
          type="password"
        />
      </div>

      <div>
        <Field
          name="rememberMe"
          component="input"
          type="checkbox"
        /> remember me
      </div>

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

const Login = (props) => {

  const onSubmit = (formData) => {
    console.log(formData);
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