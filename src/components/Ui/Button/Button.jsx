import React from 'react'
import './Button.css'

const Button = ({text, bgColor}) => {
  return (
    <div className='b-button'>
      <button type='submit' style={{background: bgColor}}>
        {text ? text : 'შედარება'}
      </button>
    </div>
  )
}

export default Button