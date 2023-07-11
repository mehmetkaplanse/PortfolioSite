import React from 'react'

const Input = (props) => {
  return (
    <input type="text" className='px-4 py-4 outline-none 
          border w-full rounded-xl' {...props}/>
  )
}

export default Input