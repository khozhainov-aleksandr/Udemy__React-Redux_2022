import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, toggleTodo } from './app/store';
import './App.css';

export default function App() {
  const todos = useSelector((state) => state);
  const dispatch = useDispatch();

  console.log(todos);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(e.target.title.value)); // передается значение из input с name === title
    e.target.reset();
  }

  return (
    <div className='App'>
      <h1>Redux 2022</h1>

      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="New todo" />
        <button type="submit">
          Add new todo
        </button>
      </form>

      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onClick={() => dispatch(toggleTodo(todo.id))}
            />
              {todo.title}
            <button
              onClick={() => dispatch(deleteTodo(todo.id))}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}