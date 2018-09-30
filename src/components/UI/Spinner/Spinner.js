import React from 'react';
import Overlay from '../Overlay/Overlay';
import classes from './Spinner.scss';

const spinner = (props) => {
  return (
    <React.Fragment>
      <Overlay
        isShown
        type={'bright'} />
      <div className={classes.SpinnerWrapper}>
        <div className={classes.Spinner}>Loading...</div>
      </div>
    </React.Fragment>
  );
};

export default spinner;