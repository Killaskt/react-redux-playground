import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//redux ish
import { createStore } from 'redux';
import allReducer from './reducers'; // /index.js is already assumed
import {Provider} from 'react-redux';

const myStore = createStore(
  allReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //shows the redux dev tools in browser
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={myStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();




// originally in body, moved out for space 


// showing how redux works in one file 
// //redux
// import {createStore} from 'redux'; // 1st step
// // impor

// // STORE - globalized state (holds all of our data and state for our app)
// // let store = createStore(reducer); is how its done

// // ACTION - (describes what you want to do)
// // all an action is, is a function that returns an obj
// const increment = () => {
//   return {
//     type: 'INCREMENT',
//   }
// }
// const decrement = () => {
//   return {
//     type: 'DECREMENT',
//   }
// }


// // REDUCER (descrbies how ur actions tranform the state into the next state)
// const counter = (state = 0, action) => {
//   switch (action.type) {
//     case 'INCREMENT':
//       return state + 1;
//     case 'DECREMENT':
//       return state - 1;
//     default:
//       return state;
//   }
// };


// let store = createStore(counter);

// // for testing, display it in console
// store.subscribe(() => console.log(store.getState()));

// // DISPATCH (allows us to execute that action )
// store.dispatch(
//   increment()
// );


// for ex, dispatch THIS action to the reducer, then the reducer will check what to do then the store gets updated
