import React from 'react'
import './Button.css'

const Button = ({text, bgColor, handleCompare}) => {
  return (
    <div className='b-button'>
      <button type='submit' 
        style={{background: bgColor}}
        onClick={handleCompare}>
        {text ? text : 'შედარება'}
      </button>
    </div>
  )
}

export default Button