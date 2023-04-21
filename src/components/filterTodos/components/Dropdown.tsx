import React, { useState, useContext, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

// lubrary imports
import { DropResult } from 'react-beautiful-dnd';

// styles
import classes from './DropDown.module.css';

// context
import { Todoscontext } from '../../../store/todos-context';

//components
import Item from './Item';

const getItemStyle = (isDragging: boolean, draggableStyle: any) => ({
  padding: `1em`,
  background: isDragging ? '#4a2875' : 'white',
  color: isDragging ? 'white' : 'black',
  fontSize: `18px`,
  border: `1px solid lightgray`,
  paddingTop: `12px`,
  width: `inherit`,
  ...draggableStyle,
});

const Dropdown = () => {
  const todoCtx = useContext(Todoscontext);
  const [nextTodos, setNextTodos] = useState(todoCtx.items);

  useEffect(() => {
    setNextTodos(todoCtx.items);
  }, [todoCtx]);

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    if (!destination) {
      return;
    }

    const items = Array.from(nextTodos);
    const [newOrder] = items.splice(source.index, 1);

    items.splice(destination.index, 0, newOrder);
    todoCtx.changeTodo(items);
    setNextTodos(items);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId='todo'>
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {nextTodos.map((item, index) => {
              return (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={getItemStyle(
                        snapshot.isDragging,
                        provided.draggableProps.style
                      )}
                    >
                      <Item item={item} />
                    </div>
                  )}
                </Draggable>
              );
            })}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default Dropdown;
