import React, { useState } from 'react' 
import Select from '../components/Ui/Select/Select';
import CheckInput from '../components/Ui/Input/CheckInput';
import AddButton from '../components/Ui/AddButton/AddButton';
import TextArea from '../components/Ui/TextArea/TextArea';
import DoubleArrow from '../components/Icons/DoubleArrow'
import Button from '../components/Ui/Button/Button';

const Text = () => {
   const [lang, setLang] = useState("");

    const options = [
    { label: "ქართული", value: "georgian" },
    { label: "English", value: "english" }, 
  ];

  return (
    <div className="container">
      <div className="top-side"> 
        <div className="left-side-comp">
            <Select
            options={options}
            value={lang}
            onChange={setLang}
            placeholder="ენა"
          /> 
          <CheckInput text={'ფორმატის შენარჩუნება'} />
        </div>
        <div className="right-side-comp">
          <AddButton text={'ახლის გახსნა '} />
        </div>
      </div>
      <div className="middle-content">
        <TextArea />
        <div className="middle-icon">
          <DoubleArrow />
        </div>
        <TextArea />
      </div>
      <div className="bottom-button">
        <Button text={'შედარება'} bgColor={'#4571E4'}/>
      </div>
    </div>
  )
}

export default Text