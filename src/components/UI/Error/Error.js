import React from 'react';

import classes from './Error.scss';

const error = ({ message }) => {
  const { Error: errorClass } = classes;

  return <div className={errorClass}>{message}</div>;
};

export default error;
