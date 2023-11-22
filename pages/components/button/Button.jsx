'use client';

// npm package
import React from 'react';

const Button = props => {
  const {
    className = '',
    buttonText = 'Button',
    ...rest
  } = props;

  return (
    <button
      className={`flex justify-center items-center uppercase px-6 py-4 rounded-xl ${className}`}
      {...rest}
    >{buttonText}</button>
  );

  
};

export default Button;