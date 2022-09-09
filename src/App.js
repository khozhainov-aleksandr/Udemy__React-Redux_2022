import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { increment, decrement, reset } from './app/store';
import './App.css'; 

export default function App() {
  const counter = useSelector(state => state);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Redux 2022</h1>

      <h3>{counter}</h3>

      <button onClick={() => dispatch(increment)}>
        +
      </button>

      <button onClick={() => dispatch(decrement)}>
        -
      </button>

      <button onClick={() => dispatch(reset)}>
        reset
      </button>
    </div>
  );
}