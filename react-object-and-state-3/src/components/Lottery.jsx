import React, { useState } from 'react'
import Ticket from './Ticket';
import { countSum, genTickets } from './helper';
import './Lottery.css';
import Button from './Button';

const Lottery = ({ num, winCondition }) => {

    let [ticket, setTicket] = useState(() => genTickets(num));
    let isWinning = winCondition(ticket);

    const buyTicket = () => {
        setTicket(genTickets(num));
    }

    return (
        <div className="lottery-container">
            <h1 className="lottery-title">Lottery Game</h1>
            <p className="lottery-subtitle">Match the sum to {winCondition(ticket)}</p>
            
            <Ticket ticket={ticket} />
            
            <p className="winning-message">{isWinning ? "🎉 Congratulations! You won! 🎉" : "Good luck!"}</p>
            <Button action = {buyTicket} />
        </div>
    )
}

export default Lottery