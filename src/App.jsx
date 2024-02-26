import { useState } from 'react'
import './App.scss'

import Navbar from './components/navbar.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <p>sito ricette</p>
    </>
  )
}

export default App
