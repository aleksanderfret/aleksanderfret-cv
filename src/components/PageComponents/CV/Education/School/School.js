import React from 'react';

import { dateToAttr } from '../../../../../utils/utils';
import classes from './School.scss';

const school = ({ endDate, name, school: schoolName, startDate, type }) => {
  const { School, Studies } = classes;
  const studiesDate = (
    <span>
      <time dateTime={dateToAttr(startDate)}>{startDate}</time>
      {endDate !== startDate && (
        <time dateTime={dateToAttr(endDate)}>{`-${endDate}`}</time>
      )}
    </span>
  );

  return (
    <div className={School}>
      <h4 className={Studies}>{name}</h4>
      <p>{type}</p>
      <h5>{schoolName}</h5>
      <p>{studiesDate}</p>
    </div>
  );
};

export default school;
