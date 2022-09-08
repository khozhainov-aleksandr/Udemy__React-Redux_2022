import React from 'react';
import { legacy_createStore as createStore, combineReducers} from 'redux'

// const reducer = (state = 0, action) => {
//   if (action.type === 'INCREMENT') {
//     return state + 10;
//   }
//   return state;
// }

// const store = createStore(reducer);

// store.dispatch({ type: 'INCREMENT' })

// console.log(store.getState());

// ------------------------------------------------------------------------------------------

const counterReducer = (state = 0, action) => {
  if (action.type === 'INCREMENT') {
    return state + 10;
  }

  return state;
}

const todosReducer = (state = [], action) => {
  if (action.type === 'ADD_TODO') {
    return [...state, 'Learn Redux'];
  }

  return state;
}

// обедняет функции Reducer в один объект
const rootReducer = combineReducers({
  counter: counterReducer,
  todos: todosReducer,
})

const store = createStore(rootReducer);

console.log(store.getState()); // {counter: 0, todos: Array(0)}

store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'ADD_TODO' });

console.log(store.getState()); // {counter: 10, todos: Array(1)}

// ------------------------------------------------------------------------------------------

export default function App() {
  return (
    <h1>Redux 2022</h1>
  );
}