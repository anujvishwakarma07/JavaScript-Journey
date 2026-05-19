import React, { useState } from 'react'
import './LottryTicketGame.css';

const LottryTicketGame = ({title}) => {
    const [randNumm, setRandNumm] = useState(0);
    const randNum = () => {
        setRandNumm((prevNum) => {
            return Math.floor(Math.random() * 900) + 100;
        })
    }
    const checkLottery = (randNumm) => {
        const sum = randNumm.toString().split("").reduce((sum, digit) => sum + Number(digit), 0);
        return sum;
    }
  return (
    <div className="lottery-container">
        <h2 className="lottery-title">{title} ! </h2>
        <h3 className="lottery-message">
            {checkLottery(randNumm) === 15 && randNumm !== 0 ? "Congratulations, You Win the Lottery !" : "" }
        </h3>
        <p className="lottery-label">Lottery Ticket :</p>
        <div className="lottery-ticket">{randNumm === 0 ? "000" : randNumm}</div>
        <button className="lottery-button" onClick={randNum}>Get new ticket</button>
    </div>
  )
}

export default LottryTicketGame