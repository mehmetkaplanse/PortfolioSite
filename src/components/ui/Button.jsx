import React from 'react'

const Button = (props) => {

  const {children,addClass, ...buttonProps} = props;

  return (
    <button className={`px-2 py-4 bg-black 
    text-white rounded-xl w-1/3 ${addClass} hover:bg-opacity-90`} {...buttonProps}>
                {children}
    </button>
  )
}

export default Button