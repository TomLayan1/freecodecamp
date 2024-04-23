import React from 'react'
import './Dice.css'

const Dice = (props) => {
  return (
      <div className='dice'>{props.value}</div>
  )
}

export default Dice