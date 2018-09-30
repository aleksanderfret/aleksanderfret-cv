import React from 'react';
import classes from './Overlay.scss';

const overlay = (props) => {
  const overlayClasses = [classes.Overlay];
  if (classes[props.type]) {
    overlayClasses.push(classes[props.type]);
  }
  return (
    props.isShown ? <div className={overlayClasses.join(' ')} onClick={props.clicked}></div> : null
  );
};

export default overlay;
