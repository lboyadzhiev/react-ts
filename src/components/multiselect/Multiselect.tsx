import { useState, useContext, useEffect } from 'react';
import { useDraggableContext, moveItems } from 'react-tiny-dnd';

// context
import { Todoscontext } from '../../store/todos-context';

// styles
import classes from './Multiselect.module.css';

// item objecyt
import Todo from '../../models/todo';

//components
import DraggableItem from '././components/DraggableItem';

const Multiselect = () => {
  const todoCtx = useContext(Todoscontext);
  const [items, setItems] = useState<Todo[]>([]);

  useEffect(() => {
    setItems(todoCtx.items);
  }, [todoCtx]);

  const onDrop = (dragIndex: number, overIndex: number) => {
    const nextItems = moveItems(items, dragIndex, overIndex);
    todoCtx.changeTodo(nextItems);
    setItems(nextItems);
  };

  const context = useDraggableContext({ onDrop });

  return (
    <div className={classes.container}>
      {items.map((item, i) => {
        return (
          <DraggableItem
            context={context}
            key={item.id}
            index={i}
            item={item}
          />
        );
      })}
    </div>
  );
};

export default Multiselect;
