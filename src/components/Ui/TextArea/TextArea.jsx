import React from 'react'
import './TextArea.css'

const TextArea = ({ value, setValue }) => {
  return (
    <div className="textarea-com">
      <textarea name="text" id="textArea" placeholder='დაიწყე წერა...'
       value={value}
        onChange={(e) => setValue(e.target.value)} 
        ></textarea>
    </div>
  )
}

export default TextArea