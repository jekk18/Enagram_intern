import React, { useState } from 'react' 
import Select from '../components/Ui/Select/Select';
import CheckInput from '../components/Ui/Input/CheckInput';
import AddButton from '../components/Ui/AddButton/AddButton';
import TextArea from '../components/Ui/TextArea/TextArea';
import DoubleArrow from '../components/Icons/DoubleArrow'
import Button from '../components/Ui/Button/Button';

const Text = () => {
    const [lang, setLang] = useState(""); 
    const [firstText, setFirstText] = useState('')
    const [secondText, setSecondText] = useState('')
    const [compared, setCompared] = useState(null)
    const [activeResult, setActiveResult] = useState(false);

    const options = [
    { label: "ქართული", value: "georgian" },
    { label: "English", value: "english" }, 
  ]; 

 const handleCompare = () => {
  setActiveResult(true)
  const a = firstText
  const b = secondText

  const m = a.length
  const n = b.length
 
  const dp = Array(m + 1)
    .fill(null)
    .map(() => Array(n + 1).fill(0))

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (a[i - 1] === b[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
      }
    }
  }
 
  let i = m
  let j = n

  const left = []
  const right = []

  while (i > 0 && j > 0) {
    if (a[i - 1] === b[j - 1]) {
      left.unshift({ char: a[i - 1], type: 'same' })
      right.unshift({ char: b[j - 1], type: 'same' })
      i--
      j--
    } else if (dp[i - 1][j] > dp[i][j - 1]) {
      left.unshift({ char: a[i - 1], type: 'deleted' })
      i--
    } else {
      right.unshift({ char: b[j - 1], type: 'inserted' })
      j--
    }
  } 
  while (i > 0) {
    left.unshift({ char: a[i - 1], type: 'deleted' })
    i--
  }

  while (j > 0) {
    right.unshift({ char: b[j - 1], type: 'inserted' })
    j--
  }

  setCompared({ left, right })
}
 
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
          <AddButton text={'ახლის გახსნა '} setActiveResult={setActiveResult} setSecondText={setSecondText} setFirstText={setFirstText}/>
        </div>
      </div> 
      {!activeResult && <div className="middle-content">
        <TextArea 
          value={firstText}
          setValue={setFirstText}
        />
        <div className="middle-icon">
          <DoubleArrow />
        </div>
        <TextArea 
          value={secondText}
          setValue={setSecondText}
        />
      </div> }
      {activeResult && <div style={{ display: "flex", gap: "50px", flexWrap: 'wrap' }}>
          <div>
            {compared?.left.map((item, index) => (
              <span
                key={index}
                style={{
                  color: item.type === 'deleted' ? 'red' : 'black'
                }}
              >
                {item.char}
              </span>
            ))}
          </div> 
          <div>
            {compared?.right.map((item, index) => (
              <span
                key={index}
                style={{
                  color: item.type === 'inserted' ? 'green' : 'black'
                }}
              >
                {item.char}
              </span>
            ))}
          </div>
      </div>}
      <div className="bottom-button">
        <Button text={'შედარება'} bgColor={'#4571E4'} handleCompare={handleCompare} setActiveResult={setActiveResult} />
      </div>
    </div>
  )
}

export default Text