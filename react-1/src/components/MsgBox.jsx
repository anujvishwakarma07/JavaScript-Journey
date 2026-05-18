import React from 'react'

const msgBox = ({userName, textColor}) => {
  const style = {
    color : textColor,
  }
  return (
    <div style={style}>
      Hello {userName}!
    </div>
  )
}

export default msgBox
