import React, { useState } from 'react';

// style
import classes from './App.module.css';

// context
import TodosContextProvider from './store/todos-context';

// components
import Todos from './components/Todos';
import NewTodo from './components/NewTodo';
import FilterTodo from './components/filterTodos/FilterTodo';
import Button from './components/multiselect/components/Button';
import Multiselect from './components/multiselect/Multiselect';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <TodosContextProvider>
      <NewTodo />
      <FilterTodo />
      {/* <div>
        <button
          className={classes.button}
          onClick={() => setIsOpen((prevStata) => !prevStata)}
        >
          -- Select Your Todos
        </button>
      </div>
      {isOpen && <Multiselect />} */}

      <Todos />
    </TodosContextProvider>
  );
}

export default App;
