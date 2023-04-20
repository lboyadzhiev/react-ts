import React from 'react';
import { Draggable, useDraggable } from 'react-tiny-dnd';
import { DraggableContextType } from 'react-tiny-dnd/lib/types';

import Todo from '../../../models/todo';
//style
import classes from './DraggableItem.module.css';

// components
import { Item } from './Item';

const DraggableItem = (props: {
  index: number;
  context: DraggableContextType;
  item: Todo;
}) => {
  const { listeners, isDragging } = useDraggable(props.context, props.index);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.checked);
    console.log(e.target.value);
    return;
  };

  return (
    <div className={classes.item}>
      <Draggable
        context={props.context}
        key={props.item.id}
        index={props.index}
        preview={
          <Item
            id={props.item.id}
            item={props.item}
            listeners={listeners}
            isDragging={false}
            handler={''}
          />
        }
      >
        <Item
          id={props.item.id}
          item={props.item}
          listeners={listeners}
          isDragging
          handler={
            <div {...listeners}>
              <input
                type='checkbox'
                value={props.item.text}
                onChange={handleChange}
              />
              <label>{props.item.text}</label>
            </div>
          }
        />
      </Draggable>
    </div>
  );
};

export default DraggableItem;
