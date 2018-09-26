import React from 'react';
import classes from './SkillsCategory.scss';

const skillsCategory = (props) => {
  return (
    <div className={classes.SkillsCategory}>
      <h4>{props.type}</h4>
      <ul>
        {props.skills.map((skill) => (
          <li
            key={skill.name}
            className={classes.Skill}>{skill.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default skillsCategory;
