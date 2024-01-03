import React, { useState } from 'react'

const ProgressBar = () => {
    const [value, setValue] = useState(0);
    const handleReset = () => {
        setValue(0)
    }
    const handleClick = () =>{
        if(value < 100){
            setValue((val) => val + 10);
        }
    }
  return (
    <div>
        <div className='progress'>

        </div>
        <span>{value}%</span>
        <div style={{width:`${value}`}}/>

        <button onClick={handleReset}>Reset</button>
        <button onClick={handleClick}>Click</button>
    </div>
  )
}

export default ProgressBar