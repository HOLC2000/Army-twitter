import React from 'react';
import classes from './button_3.module.css';

const Button3 = (props) => {
  return (
    <React.Fragment>
      <button
        href="#"
        position={props.position}
        className={`${classes.button} ${props.position}`}
        onClick={props.function_1}>
        {props.value_1}
      </button>
      <button
        href="#"
        className={`${classes.button}`}
        onClick={props.function_2}>
        {props.value_2}
      </button>
      <button
        href="#"
        className={`${classes.button}`}
        onClick={props.function_3}>
        {props.value_3}
      </button>
    </React.Fragment>
  );
};

export default Button3;
