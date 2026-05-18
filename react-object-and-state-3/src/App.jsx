import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import LudoBoard from './components/LudoBoard'
import ArrayState from './components/ArrayState'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <LudoBoard /> */}
      <ArrayState />
    </>
  )
}

export default App
