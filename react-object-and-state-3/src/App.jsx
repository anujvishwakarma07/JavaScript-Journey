import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Lottery from './components/Lottery'
import { countSum } from './components/helper'


function App() {
  const winCondition = (ticket) => {
    return countSum(ticket) === 15;
  }
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <LudoBoard /> */}
      {/* <ArrayState /> */}
      {/* <TodoList /> */}
      {/* <LottryTicketGame title = "Lottery Game" /> */}
      <Lottery num={3} winCondition={winCondition} />
    </>
  )
}

export default App
