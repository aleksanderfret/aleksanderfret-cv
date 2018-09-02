import React from 'react';
import classes from './Profession.scss';

const profession = (props) => {
  return(
    <React.Fragment>
      <h4>{props.name}</h4>
      {props.advantages.map((advantage) => (
        advantage
      ))}
    </React.Fragment>
  );
};

export default profession;
