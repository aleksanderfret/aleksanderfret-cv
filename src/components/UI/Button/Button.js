import React from 'react';

import classes from './Button.scss';

const Button = ({
  btnType,
  children,
  disabled,
  isDisplayed,
  label,
  onClick
}) => {
  const { Button: buttonClass, AlwaysDisplayed } = classes;
  const buttonClasses = [buttonClass];

  if (classes[btnType]) {
    buttonClasses.push(classes[btnType]);
  }
  if (isDisplayed) {
    buttonClasses.push(AlwaysDisplayed);
  }

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={buttonClasses.join(' ')}
      title={label}
      type="button"
      aria-label={label}
    >
      {children}
    </button>
  );
};

export default Button;
