import React from 'react';
import classes from './Button.scss';

const button = (props) => {
  const buttonClasses = [classes.Button];
  if (classes[props.btnType]) {
    buttonClasses.push(classes[props.btnType]);
  }
  return(
    <button
      disabled={props.disabled}
      onClick={props.clicked}
      className={buttonClasses.join(' ')}
      title={props.label}
      aria-label={props.label}>
      {props.children}
    </button>
  );
};

export default button;
