import react from 'react'
import './App.css';

import Interval from './components/Interval'
import Sum from './components/Sum'
import Average from './components/Average'
import Raffle from './components/Raffle'

function App() {


  return (
    <div className="App">
      <h1>Exercício react</h1>
      <div className='row'>
        <Interval />
      </div>
      <div className='row'>
        <Sum  />
        <Average />
        <Raffle />
      </div>
    </div>
  );
}

export default App;
