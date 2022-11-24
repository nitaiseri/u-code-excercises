import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import RandomCounter from './features/random-counter/randomCounter';
import AddButton from './features/add-button/addButton';
import {selectCount} from './features/counter/counterSlice'
import {selectCountRandom} from './features/random-counter/randomCounterSlice'
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const count1 = useSelector(selectCount);
  const count2 = useSelector(selectCountRandom);


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <RandomCounter/>
        <AddButton />
        <div>{Math.max(count1, count2)}</div>
      </header>
    </div>
  );
}

export default App;
