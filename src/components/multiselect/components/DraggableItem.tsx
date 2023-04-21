import React, { useContext, useState } from 'react';
import { Draggable, useDraggable } from 'react-tiny-dnd';
import { DraggableContextType } from 'react-tiny-dnd/lib/types';

import Todo from '../../../models/todo';
//style
import classes from './DraggableItem.module.css';

// contsxt
import { Todoscontext } from '../../../store/todos-context';

// components
import { Item } from './Item';

const DraggableItem = (props: {
  index: number;
  context: DraggableContextType;
  item: Todo;
}) => {
  const todoCtx = useContext(Todoscontext);
  const { listeners, isDragging } = useDraggable(props.context, props.index);
  const [selected, setSelected] = useState(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelected((prevState) => !prevState);
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
                id={props.item.id}
                type='checkbox'
                value={props.item.text}
                onChange={handleChange}
                checked={selected}
              />
              <label htmlFor={props.item.id}>{props.item.text}</label>
            </div>
          }
        />
      </Draggable>
    </div>
  );
};

export default DraggableItem;
