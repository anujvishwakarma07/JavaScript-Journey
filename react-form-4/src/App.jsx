import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Form from './components/Form'
import CommentFrom from './components/CommentFrom'
import Comment from './components/Comment'
import CounterUseEffect from './components/CounterUseEffect'
import Jokes from './components/Jokes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Form /> */}
      {/* <Comment /> */}
      {/* <CounterUseEffect /> */}
      <Jokes />
    </>
  )
}

export default App
