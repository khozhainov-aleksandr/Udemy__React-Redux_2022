import { legacy_createStore as  createStore } from "redux";

const todo = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: Date.now(),
          title: action.title,
          completed: false,
        }
      ];
    
    case 'DELETE_TODO':
      return state.filter((todo) => todo.id !== action.id);

    case 'TOGGLE_TODO':
      return state.map((todo) => (
        todo.id === action.id
        ? {...todo, completed: !todo.completed}
        : todo
      ));
  
    default: return state;
  }
}

export const store = createStore(todo, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export const addTodo = (title) => ({
  type: 'ADD_TODO',
  title,
});

export const deleteTodo = (id) => ({
  type: 'DELETE_TODO',
  id,
});

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id,
});