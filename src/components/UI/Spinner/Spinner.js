import React from 'react';

import Overlay from 'components/UI/Overlay/Overlay';
import classes from './Spinner.scss';

const spinner = () => {
  const { Spinner, SpinnerWrapper } = classes;

  return (
    <>
      <Overlay isShown type="bright" />
      <div className={SpinnerWrapper}>
        <div className={Spinner}>Loading...</div>
      </div>
    </>
  );
};

export default spinner;
