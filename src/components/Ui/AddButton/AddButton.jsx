import React from 'react'
import Add from '../../Icons/Add' 
import './AddButton.css'


const AddButton = ({text}) => {
  return (
    <div className="button">
        <button type='submit'> 
            <div className='but-icon'>
                <Add />
            </div>
               {text ? text : 'დამატება'}  
        </button>
    </div>
  )
}

export default AddButton