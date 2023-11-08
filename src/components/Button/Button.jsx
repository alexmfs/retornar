import React from 'react';
import './Button.scss';

const Button = ({children, variant}) => {

  const buttonClass = `button ${variant || ''}`;

  return (
    <button className={buttonClass}>{children}</button>
  )
}

export default Button
