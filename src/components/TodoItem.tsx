import React from 'react';

const TodoItem: React.FC<{ item: string }> = (props) => {
  return <li>{props.item}</li>;
};

export default TodoItem;
