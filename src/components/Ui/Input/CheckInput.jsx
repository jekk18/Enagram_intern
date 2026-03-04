import React from 'react'
import './Input.css'

const Input = ({text}) => {
  return (
    <div className='input-div'>
      <input type='checkbox'  />
      <p>
        {text && text}
      </p>
    </div>
  )
}

export default Input