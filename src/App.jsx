import { useState } from 'react'

import HomePage from '../src/pages/HomePage'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   
    <HomePage/>
  )
}

export default App
