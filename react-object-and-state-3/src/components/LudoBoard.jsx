import React, { useState } from 'react'

const LudoBoard = () => {
    // const [blueMoves, setBlueMoves] = useState(0);
    // const [yellowMoves, setYellowMoves] = useState(0);
    // const [greenMoves, setGreenMoves] = useState(0);
    // const [redMoves, setredMoves] = useState(0);

    // instead of doing this we can pass a object like this : - 
    const [moves, setMoves] = useState({
        blue: 0,
        red: 0,
        yellow: 0,
        green: 0,
    })

    const yellowUpdate = () => {
        // moves.yellow += 1;
        console.log(`moves : ${moves.yellow}`)
        // setMoves({...moves})
        setMoves((prevMoves) =>{
           return {...prevMoves, yellow : prevMoves.yellow + 1};
        })
    }
    const greenUpdate = () => {
        console.log(`moves : ${moves.green}`)
        setMoves((prevMoves) => {
            return {...prevMoves, green : prevMoves.green + 1};
        })
    }
    const blueUpdate = () => {
        console.log(`moves : ${moves.blue}`)
        setMoves((prevMoves) => {
            return {...prevMoves, blue : prevMoves.blue + 1};
        })
    }
    const redUpdate = () => {
        console.log(`moves : ${moves.red}`)
        setMoves((prevMoves) => {
            return {...prevMoves, red : prevMoves.red + 1};
        })
    }
    return (
        <div>
            <p>Game Begins !</p>
            <div className="board">
                <p>Yellow Moves : {moves.yellow}</p>
                <button style={{ backgroundColor : "yellow", color : "black"}} onClick={yellowUpdate}>+1</button>
                <p>Blue Moves :  {moves.blue}</p>
                <button style={{ backgroundColor : "blue"}} onClick={blueUpdate}>+1</button>
                <p>Green Moves : {moves.green}</p>
                <button style={{ backgroundColor : "green"}} onClick={greenUpdate} >+1</button>
                <p>Red Moves : {moves.red}</p>
                <button style={{ backgroundColor : "red"}} onClick={redUpdate}>+1</button>
            </div>
        </div>
    )
}

export default LudoBoard        