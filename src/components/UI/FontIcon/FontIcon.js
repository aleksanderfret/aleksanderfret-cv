import React from 'react';
import classes from './FontIcon.scss';

const fontIcon = (props) => {

  const iconClasses = [props.iconType];

  if (classes[props.iconClass]) {
    iconClasses.push(props.iconClass);
  }
  return(
    <i className={iconClasses.join(' ')}></i>
  );
};

export default fontIcon;