import React from 'react'

//Handling onclick events

const Button = () => {
    const printHello = () => {
        console.log("You clicked the button");
    }

const doubleClick = () =>{
    console.log("You double clicked !");
}
  return (
    <div style={{
            display : "flex",
            alignItems : "center",
            justifyContent : "center"
        }} >
        <button onClick={printHello}>Click me!</button>
        <h3 onDoubleClick={doubleClick}>double Click</h3>
    </div>
  )
}

export default Button