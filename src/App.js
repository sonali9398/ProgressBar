import { useEffect, useState } from 'react';
import './App.css';
import ProgressBar from './components/ProgressBar';

function App() {
  const[value, setValue] = useState(0);

  useEffect(() =>{
    setInterval(() =>{
      setValue((val) => val + 1);
    }, 100);
  }, []);

  return(
    <div className='App'>
        <h1>ProgressBar</h1>
      <ProgressBar value={value}/>
    </div>
  )
}

export default App;
