import React from 'react';

import Social from '../Social/Social';
import classes from './Footer.scss';

const footer = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const { Footer } = classes;
  const startYear = 2018;
  const date =
    currentYear > startYear ? `${startYear}-${currentYear}` : startYear;
  const text = ` ${date} Aleksander Fret`;

  return (
    <div className={Footer}>
      <Social theme="light" />
      <p>
        &copy;
        {text}
      </p>
    </div>
  );
};

export default footer;
