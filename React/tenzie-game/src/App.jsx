import React, { useState } from 'react'
import './App.css';
import Dice from './Component/Dice';

const App = () => {

  // Write a function that will generate 10 random number
  const allNewDIce = () => {
    let newDice = [];
    for(let i = 0; i < 10; i++) {
      const randomNumber = Math.ceil(Math.random() * 6)
      newDice.push(randomNumber);
    }
    return newDice;
  }
  console.log(allNewDIce());

  // declare a state and set the state value as the allNewDice function
  const [newDice, setNewDice] = useState(allNewDIce());

  const diceElement = newDice.map((diceNum, index) => {
    return (
      <Dice key={index} value={diceNum} />
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
      <button>Roll</button>
    </div>
  );
}

export default App