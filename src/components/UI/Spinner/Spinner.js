import React from 'react';

import Overlay from 'components/UI/Overlay/Overlay';
import { Spinner, SpinnerWrapper } from './Spinner.scss';

const spinner = () => (
  <>
    <Overlay isShown type="bright" />
    <div className={SpinnerWrapper}>
      <div className={Spinner}>Loading...</div>
    </div>
  </>
);

export default spinner;
