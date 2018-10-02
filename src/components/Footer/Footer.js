import React from 'react';
import Social from '../Social/Social';
import classes from './Footer.scss';

const footer = (props) => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const startYear = 2018;
  const date =
    (currentYear > startYear)
      ? `${startYear}-${currentYear}`
      : startYear;

  return (
    <div className={classes.Footer}>
      <Social />
      <p>&copy; {date} Aleksander Fret</p>
    </div>
  );
};

export default footer;