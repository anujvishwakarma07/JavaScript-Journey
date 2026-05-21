import React, { useEffect, useState } from 'react'

const CounterUseEffect = () => {
    const [count, setCount] = useState(0);
    const increaseCount = () => {
        setCount((currCount) => currCount + 1);
    }

    useEffect(function printSomething () {
        console.log("Just print something");
    })
  return (
    <div>
        <p>Count :  {count} </p>
        <button onClick={increaseCount}>Increase</button>
    </div>
  )
}

export default CounterUseEffect