import React from 'react';
import { legacy_createStore as createStore} from 'redux'

let nextTodoID = 0;

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
const store = createStore(todos);

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

store.dispatch(toggleTodo(2));

console.log(store.getState()); // [{id: 1, title: 'Learn React !', completed: false} {id: 2, title: 'Learn Redux !!!', completed: true}]































export default function App() {
  return (
    <h1>Redux 2022</h1>
  );
}