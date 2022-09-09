import React from 'react';
import { legacy_createStore as createStore} from 'redux'

let nextTodoID = 2;

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: ++nextTodoID,
          title: action.title,
          completed: false,
        }
      ]
      
    case 'TOGGLE_TODO':
      return state.map(todo => (
        (todo.id === action.todoID)
        ? {
          ...todo,
          completed: !todo.completed,
        } : todo
      ))
  
    default: {
      return state;
    }
  }
};


// Create Store
// Может принимать 3 параметра
// 1. обязательный.
// 2. Значение по умолчанию, к примеру LocalStorage
const exampleLocalStorage = [
  {id: 0, name: 'Alex', age: 32, children: 1, married: true},
  {id: 1, name: 'Victor', age: 58, children: 3, married: false},
  {id: 2, name: 'Bob', age: 17, children: 0, married: false},
]
const store = createStore(todos, exampleLocalStorage);


// action creators
const addTodo = (title) => ({
  type: 'ADD_TODO',
  title,
})

const toggleTodo = (todoID) => ({
  type: 'TOGGLE_TODO',
  todoID,
})


console.log(store.getState()); // []

store.dispatch(addTodo('Learn React !'));
store.dispatch(addTodo('Learn Redux !!!'));

console.log(store.getState()); // [{id: 1, title: 'Learn React !', completed: false} {id: 2, title: 'Learn Redux !!!', completed: false}]

store.dispatch(toggleTodo(3));

console.log(store.getState()); // [{id: 1, title: 'Learn React !', completed: false} {id: 2, title: 'Learn Redux !!!', completed: true}]



export default function App() {
  return (
    <h1>Redux 2022</h1>
  );
}