import React from 'react';

// styles
import classes from './InputField.module.css';

const InputField = (props: { onOpen: () => void }) => {
  return (
    <button className={classes.button} onClick={props.onOpen}>
      -- Select Your Todos
    </button>
  );
};

export default InputField;
