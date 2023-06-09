import React, { useState } from 'react';

import Todo from '../models/todo';

type TodosContextType = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
  changeTodo: (list: Todo[]) => void;
};

export const Todoscontext = React.createContext<TodosContextType>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
  changeTodo: () => {},
});

const TodosContextProvider: React.FC = (props) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);

    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  };

  const changeTodoHandler = (list: Todo[]) => {
    setTodos(list);
  };

  const deleteTodoHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  };
  
  const contextValue: TodosContextType = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: deleteTodoHandler,
    changeTodo: changeTodoHandler,
  };
  return (
    <Todoscontext.Provider value={contextValue}>
      {props.children}
    </Todoscontext.Provider>
  );
};

export default TodosContextProvider;
