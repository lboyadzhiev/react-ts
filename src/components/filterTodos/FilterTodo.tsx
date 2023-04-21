import React, { useContext, useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
//style
import classes from './FilterTodo.module.css';

// context
import { Todoscontext } from '../../store/todos-context';

//components

import InputField from './components/InputField';
import Dropdown from './components/Dropdown';
import { isOmittedExpression } from 'typescript';

const FilterTodo = () => {
  const todoCtx = useContext(Todoscontext);
  const [isOpen, setIsOpen] = useState(false);

  const openHandler = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <div className={classes.container}>
      <InputField onOpen={openHandler} />
      {isOpen && (
        <div className={classes.dropdown}>
          <Dropdown />
        </div>
      )}
    </div>
  );
};

export default FilterTodo;
