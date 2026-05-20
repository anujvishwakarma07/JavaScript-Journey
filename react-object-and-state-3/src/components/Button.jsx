import React from 'react'

const Button = ({action}) => {
  return (
        <button className="buy-btn" onClick={action}>Buy New Ticket</button>
  )
}

export default Button