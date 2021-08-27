import React from 'react';

import './FormsControl.css';

export const FormControl = ({ input, meta, ...props }) => {

  const hasError = meta.touched && meta.error

  return (
    <div className={`form-control ${hasError && 'error'}`} >
      <div>
        {props.children}
      </div>

      <div>
        {
          hasError &&
          <span>
            {meta.error}
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