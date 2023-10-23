import { useState } from 'react'
import Test from './Test'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>Hello World</h1>
     <Test />
    </>
  )
}

export default App 
