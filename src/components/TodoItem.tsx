import React from 'react';

// styles
import classes from './TodoItem.module.css';

const TodoItem: React.FC<{ item: string; onRemoveItem: () => void }> = (
  props
) => {
  return (
    <li className={classes.item} onClick={props.onRemoveItem}>
      {props.item}
    </li>
  );
};

export default TodoItem;
