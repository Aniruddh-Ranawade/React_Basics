
import { useState } from 'react';
import './App.css'

function App() {

  const [count, setCount] = useState(0);

  const addValue = () => {
    setCount(count+1);
    console.log('clicked : ', count);
  }

  const decreaseValue = () => {
    if(count > 0){
      setCount(count-1);
    } else{
      count = 0;    
    }
  }

  return (
    <>
      <h1>Counter Project</h1>
      <br></br>
      <br></br>

      <h2>Counter Value : {count} </h2>
      <button onClick={addValue}>Increase</button>
      <br />
      <br />
      <button onClick={decreaseValue}>Decrease</button>
    </>
  )
}

export default App
