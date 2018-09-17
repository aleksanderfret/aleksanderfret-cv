import React from 'react';
import classes from './Error.scss';

const error = (props) => {
  return (
    <div className={classes.Error}>
      {props.message}
    </div>
  );
};

export default error;
