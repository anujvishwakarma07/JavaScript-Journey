import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import MsgBox from './components/MsgBox'
import ProductTab from './components/ProductTab'

function App() {
  const style = {
    display: 'flex',
    flexWrap: "wrap",
    justifyContent: 'center',
    alignItems: 'center'
  }

  return (
    <>
      <h3 style={{ textAlign : "center"}}>Blockbuster Deal | Shop Now</h3>
      <div style={style} >
        <ProductTab title="Logitech Product Master" idx={0} />
        <ProductTab title="Apple Pencil Second Gen" idx={1} />
        <ProductTab title="Microsoft Office 365" idx={2} />
        <ProductTab title="Canva new Update" idx={3} />
      </div>
    </>
  )
}

export default App
