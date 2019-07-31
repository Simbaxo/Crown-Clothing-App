import React from 'react'
import './form-input.styles.scss'

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <div className='group'>
    <input className='form-input' onChange={handleChange} {...otherProps} />
    {/* if i need a label prop it will generate one */}
    {label ? (
      <label
        className={`${
          // if there is a value apply the class of shrink
          otherProps.value.length ? 'shrink' : ''
        } form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
)
