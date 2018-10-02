import React from 'react';
import { dateToAttr } from '../../../../../utils/utils';
import classes from './School.scss';

const school = (props) => {
  const studiesDate = (<span>
    <time dateTime={dateToAttr(props.startDate)}>{props.startDate}</time>
    {props.endDate !== props.startDate &&
      <time dateTime={dateToAttr(props.endDate)}>{`-${props.endDate}`}</time>
    }
  </span>);
  return (
    <div className={classes.School}>
      <h4 className={classes.Studies}>{props.name}</h4>
      <p>{props.type}</p>
      <h5>{props.school}</h5>
      <p>{studiesDate}</p>
    </div>
  );
};

export default school;
