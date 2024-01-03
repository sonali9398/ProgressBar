import React, { useEffect, useState } from 'react'
import './App.css'

const ProgressBar = () => {
    const [percentage, setPercentage] = useState(0);

    const handleReset = () =>{
        setPercentage(0);
    }

    const handleClick = () =>{
        if(percentage < 100) {
            setPercentage(percentage + 10);
        }
    }

    return(
        <div className='progress'>
            

            <div>{percentage}%</div>
            
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleClick}>Click</button>


        </div>
    )
}

export default ProgressBar