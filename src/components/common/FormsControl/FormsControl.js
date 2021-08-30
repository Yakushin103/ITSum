import React from 'react';

import { Field } from 'redux-form';

import './FormsControl.css';

export const FormControl = ({ meta: { touched, error }, children }) => {

  const hasError = touched && error

  return (
    <div className={`form-control ${hasError && 'error'}`} >
      <div>
        {children}
      </div>

      <div>
        {
          hasError &&
          <span>
            {error}
          </span>
        }
      </div>
    </div>
  )
}

export const Textarea = (props) => {

  return <FormControl {...props}>
    <textarea {...props.input} {...props} />
  </FormControl>
}

export const Input = (props) => {

  return <FormControl {...props}>
    <input {...props.input} {...props} />
  </FormControl>
}

export const CreateField = (placeholder, name, validators, component, type = "", text = '') => {
  return (
    <div>
      <Field
        name={name}
        component={component}
        placeholder={placeholder}
        validate={validators}
        type={type}
      />
      {text}
    </div>
  )
}