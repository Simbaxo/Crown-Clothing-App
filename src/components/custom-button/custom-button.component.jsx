import React from 'react'
import './custom-button.styles.scss'

const CustomButton = ({ children, ...otherProps }) => (
  // Passing the children and other props from input components
  <button className='custom-button' {...otherProps}>
    {children}
  </button>
)

export default CustomButton
