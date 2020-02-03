import React from 'react';

import classes from './Overlay.scss';

const Overlay = ({ clicked, isShown, type }) => {
  const { Overlay: overlayClass } = classes;
  const overlayClasses = [overlayClass];

  if (classes[type]) {
    overlayClasses.push(classes[type]);
  }

  return isShown ? (
    <div className={overlayClasses.join(' ')} onClick={clicked} />
  ) : null;
};

export default Overlay;
