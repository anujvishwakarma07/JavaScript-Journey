import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Form from './components/Form'
import CommentFrom from './components/CommentFrom'
import Comment from './components/Comment'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Form /> */}
      <Comment />
    </>
  )
}

export default App
