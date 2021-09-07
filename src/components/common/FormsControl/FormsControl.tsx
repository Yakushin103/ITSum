import React from 'react';
import { Field, WrappedFieldProps, WrappedFieldMetaProps } from 'redux-form';

import { FieldValidatoreType } from '../../../utils/validators';

import './FormsControl.css';

type FormControlPropsType = {
  meta: WrappedFieldMetaProps
}

export const FormControl: React.FC<FormControlPropsType> = ({
  meta: { touched, error },
  children }) => {

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

export const Textarea: React.FC<WrappedFieldProps> = (props) => {

  return <FormControl {...props}>
    <textarea {...props.input} {...props} />
  </FormControl>
}

export const Input: React.FC<WrappedFieldProps> = (props) => {

  return <FormControl {...props}>
    <input {...props.input} {...props} />
  </FormControl>
}

export function CreateField<KeysType extends string>(
  placeholder: string | undefined,
  name: KeysType,
  validators: Array<FieldValidatoreType>,
  component: React.FC<WrappedFieldProps>,
  type = '',
  text = '') {
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