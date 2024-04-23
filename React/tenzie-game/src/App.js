import './App.css';
import Dice from './Component/Dice';

function App() {
  return (
    <div className="App">
      <div className='name-container'>
        <h2>Tenzie</h2>
        <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      </div>
      <div className='dice-constainer'>
        <Dice value = {4} />
        <Dice value = {2} />
        <Dice value = {6} />
        <Dice value = {3} />
        <Dice value = {6} />
        <Dice value = {4} />
        <Dice value = {6} />
        <Dice value = {2} />
        <Dice value = {3} />
        <Dice value = {4} />
      </div>
      <button>Roll</button>
    </div>
  );
}

export default App;
