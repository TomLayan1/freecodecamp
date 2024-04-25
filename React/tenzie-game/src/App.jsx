import React, { useState } from 'react'
import './App.css';
import Dice from './Component/Dice';
// install nanoid (npm install nanoid) to generate random numbers
import { nanoid } from 'nanoid'

const App = () => {
  const generateNewDice = () => {
    return {
      // call the nanoid function as the id value 
      id: nanoid(),
      value: Math.ceil(Math.random() * 6),
      isHeld: false
    }
  }

  // Write a function that will generate 10 random number
  const allNewDIce = () => {
    let newDice = [];
    for(let i = 0; i < 10; i++) {
      newDice.push(generateNewDice());
    }
    return newDice;
  }

  // declare a state and set the state value as the allNewDice function
  const [newDice, setNewDice] = useState(allNewDIce());

  const rollDice = () => {
    setNewDice(prevDice => {
      return prevDice.map(dice => {
        return dice.isHeld ? dice : generateNewDice()
      })
    })
  }

  const holdDice = (id) => {
    setNewDice(prev => {
      return prev.map(dice => {
        return dice.id === id ? {...dice, isHeld: !dice.isHeld} : dice
      })
    })
  }

  const diceElement = newDice.map((diceNum) => {
    return (
      <Dice key={diceNum.id} id={diceNum.id} value={diceNum.value} isHeld={diceNum.isHeld} holdDice={() => holdDice(diceNum.id)} />
    )
  })

  return (
    <div className="App">
      <div className='name-container'>
        <h2>Tenzie</h2>
        <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      </div>
      <div className='dice-constainer'>
        {diceElement}
      </div>
      <button onClick={rollDice}>Roll</button>
    </div>
  );
}

export default App