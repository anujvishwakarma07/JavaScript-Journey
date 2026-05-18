import React from 'react'

const Price = ({oldPrices, newPrices}) => {
  const oldStyle  = {
    textDecorationLine : "line-through",
  }

  const newStyle = {
    fontWeight : "bold",
  }

  const style = {
    backgroundColor  : "#e0c367",
    borderBottomLeftRadius : "15px",
    borderBottomRightRadius : "15px"
  }
  return (
    <div style={style}>
      <span style={oldStyle} >{oldPrices}</span>
       &nbsp; &nbsp; &nbsp;
      <span style={newStyle}>{newPrices}</span>
    </div>
  )
}

export default Price
