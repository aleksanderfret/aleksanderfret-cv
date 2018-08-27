import React from 'react';
import classes from './Overlay.scss';

const overlay = (props) => {
  return(
    props.isShown ? <div className={classes.Overlay} onClick={props.clicked}></div> : null
  );
};

export default overlay;
