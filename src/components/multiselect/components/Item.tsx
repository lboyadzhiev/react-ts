import React from 'react';

// styles
import classes from './Item.module.css';

import Todo from '../../../models/todo';

export const Item = (props: {
  item: Todo;
  id: string;
  listeners: any;
  isDragging: boolean;
  handler: any;
}) => {
  return <div className={classes.item}>{props.handler}</div>;
};
