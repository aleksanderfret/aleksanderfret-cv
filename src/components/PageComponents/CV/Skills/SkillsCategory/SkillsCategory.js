import React from 'react';

import classes from './SkillsCategory.scss';

const skillsCategory = ({ skills, type }) => {
  const { Skill, SkillsCategory } = classes;

  return (
    <div className={SkillsCategory}>
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
