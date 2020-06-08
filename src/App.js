import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement, signin} from './actions/index';

function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();


  return (
    <div className="App">
      <h1>Reduxx timee yayayy</h1>
      <h2>Counter: {counter}</h2>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>

      <h3>fdsf{isLogged}</h3>

      {isLogged? ( <h3>Info i shouldnt see if not logged in</h3>) : ''}
    </div>
  );
}

export default App;
