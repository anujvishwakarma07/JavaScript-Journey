import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import LikeButtonCard from './components/LikeButtonCard'

function App() {

  let [count, setCount] = useState(0);

  const counter = () => {
    setCount(count + 1);
    console.log(count);
  }
 

  return (
    <>
      <h1>States in React.js</h1>


      <button onClick={counter}>increate count : {count}</button>

      <LikeButtonCard />
    </>
  )
}

export default App
