import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Use from './components/Use'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Use/>
    </div>
  )
}

export default App
