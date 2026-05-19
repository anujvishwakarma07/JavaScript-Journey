import React, { useState } from 'react'
import Ticket from './Ticket';
import { countSum, genTickets } from './helper';
import './Lottery.css';

const Lottery = ({num, winningSum }) => {

    let [ticket, setTicket] = useState(genTickets(num));
    let isWinning = countSum(ticket) === winningSum;

    const buyTicket = () => {
        setTicket(genTickets(num));
    }

    return (
        <div className="lottery-container">
            <h1 className="lottery-title">Lottery Game</h1>
            <p className="lottery-subtitle">Match the sum to {winningSum}</p>
            
            <Ticket ticket={ticket} />
            
            <p className="winning-message">{isWinning ? "🎉 Congratulations! You won! 🎉" : "Good luck!"}</p>
            <button className="buy-btn" onClick={buyTicket}>Buy New Ticket</button>
        </div>
    )
}

export default Lottery