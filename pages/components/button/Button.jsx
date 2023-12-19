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
      className={`flex justify-center items-center xsm:!text-[12px] md:!text-[13px] lg:!text-[14px] uppercase xsm:px-4 md:px-5 lg:px-6 xsm:py-3 lg:py-4 xsm:rounded-lg md:rounded-xl ${className}`}
      {...rest}
    >{buttonText}</button>
  );

  
};

export default Button;