import React from 'react';

// style
import classes from './Item.module.css';

import Todo from '../../../models/todo';

const Item = (props: { item: Todo }) => {
  return (
    <div className={classes.item}>
      <input
        className={classes.input}
        id={props.item.id}
        type='checkbox'
        value={props.item.text}
      />
      <label htmlFor={props.item.id}>{props.item.text}</label>
    </div>
  );
};

export default Item;
