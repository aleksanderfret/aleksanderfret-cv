import React from 'react';

import classes from './SkillsCategory.scss';

const skillsCategory = ({ skills, type }) => {
  const { Skill } = classes;

  return (
    <div className={classes.SkillsCategory}>
      <h4>{type}</h4>
      <ul>
        {skills.map(({ name }) => (
          <li key={name} className={Skill}>
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default skillsCategory;
