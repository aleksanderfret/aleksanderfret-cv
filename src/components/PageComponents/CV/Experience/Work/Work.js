import React from 'react';

import { dateToAttr } from '../../../../../utils/utils';
import classes from './Work.scss';

const work = ({
  company,
  duties,
  labels: { dutiesLabel, projectsLabel, projectLabel },
  endDate,
  position,
  projects,
  startDate
}) => {
  const { Duties, PositionName, Projects, Work } = classes;
  const workDate = (
    <span>
      <time dateTime={dateToAttr(startDate)}>{startDate}</time>
      {endDate !== startDate && (
        <time dateTime={dateToAttr(endDate)}>{`-${endDate}`}</time>
      )}
    </span>
  );

  return (
    <div className={Work}>
      <h4 className={PositionName}>{position}</h4>
      <h5>{company}</h5>
      <p>{workDate}</p>
      {duties && (
        <>
          <h5>{dutiesLabel}</h5>
          <ul className={Duties}>
            {duties.map(duty => (
              <li key={duty}>{duty}</li>
            ))}
          </ul>
        </>
      )}
      {projects && (
        <>
          <h5>{projects.length > 1 ? projectsLabel : projectLabel}</h5>
          <ul className={Projects}>
            {projects.map(({ name, url }) =>
              url !== '' ? (
                <li key={name}>
                  <a href={url} rel="noopener noreferrer" target="_blank">
                    {name}
                  </a>
                </li>
              ) : (
                <li key={name}>{name}</li>
              )
            )}
          </ul>
        </>
      )}
    </div>
  );
};

export default work;
