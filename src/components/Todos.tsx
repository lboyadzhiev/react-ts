import Reac, { useContext } from 'react';

// styles
import classes from './Todos.module.css';

// context
import { Todoscontext } from '../store/todos-context';

// components
import TodoItem from './TodoItem';

const Todos: React.FC = () => {
  const todoCtx = useContext(Todoscontext);

  return (
    <ul className={classes.todos}>
      {todoCtx.items.map((item) => (
        <TodoItem
          key={item.id}
          item={item.text}
          onRemoveItem={todoCtx.removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
