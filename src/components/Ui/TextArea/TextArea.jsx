import React from 'react'
import './TextArea.css'

const TextArea = ({firtsText, setFirstText, seccondText, setSeccondText}) => {
  return (
    <div className="textarea-com">
      <textarea name="text" id="textArea" placeholder='დაიწყე წერა...'></textarea>
    </div>
  )
}

export default TextArea