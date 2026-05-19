import React from 'react'
import TicketNum from './TicketNum'

const Ticket = ({ticket}) => {
  return (
    <div className="ticket-container">
        {
            ticket.map((num, idx) => (
                <TicketNum num={num} key={idx} />
            ))
        }
    </div>
  )
}

export default Ticket