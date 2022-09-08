import React, { useEffect, useState } from 'react';
import { legacy_createStore as createStore} from 'redux'

export default function App() {
  const [state, setState] = useState();

  const increment = {
    type: 'INCREMENT',
  }
  const decrement = {
    type: 'DECREMENT',
  }
  const reset = {
    type: 'RESET',
  }

  const counter = (state = 0, action) => {
    if (action.type === 'INCREMENT') {
      return state + 1;
    }

    // switch (action.type) {
    //   case 'INCREMENT':
    //     return state + 1;
  
    //   case 'DECREMENT':
    //     return state - 1;
  
    //   case 'RESET':
    //     return state = 0;
      
    //   default: break;
    // }
  
    return state;
  }

  const store = createStore(counter);

  useEffect(() => {
    setState(store.getState());
  }, [])
  
  return (
    <main>
      <h1>Redux 2022</h1>

      <h3>{state}</h3>

      <button onClick={() => store.dispatch(increment)}>
        +
      </button>

      <button onClick={() => store.dispatch(decrement)}>
        -
      </button>

      <button onClick={() => store.dispatch(reset)}>
        Reset counter
      </button>
    </main>
  );
}