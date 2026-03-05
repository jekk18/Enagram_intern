import React from 'react'
import Add from '../../Icons/Add' 
import './AddButton.css'


const AddButton = ({text,setActiveResult,setSecondText,setFirstText}) => {
  return (
    <div className="button">
        <button type='submit' onClick={()=> {setActiveResult(false); setFirstText(''); setSecondText('')}}> 
            <div className='but-icon'>
                <Add />
            </div>
               {text ? text : 'დამატება'}  
        </button>
    </div>
  )
}

export default AddButton