import React from 'react';
import { dateToAttr } from '../../../../../utils/utils';
import classes from './Work.scss';

const work = (props) => {
  const workDate = (<span>
    <time dateTime={dateToAttr(props.startDate)}>{props.startDate}</time>
    {props.endDate !== props.startDate &&
      <time dateTime={dateToAttr(props.endDate)}>{`-${props.endDate}`}</time>
    }
    </span>);
  return(
    <div className={classes.Work}>
      <h4 className={classes.PositionName}>{props.position}</h4>
      <h5>{props.company}</h5>
      <p>{workDate}</p>
      {props.duties &&
        <React.Fragment>
          <h5>{props.labels.duties}</h5>
          <ul className={classes.Duties}>
            {props.duties.map((duty, index) => (
              <li key={index}>{duty}</li>
            ))}
          </ul>
        </React.Fragment>
      }
      {props.projects &&
        <React.Fragment>
          <h5>{props.projects.length > 1 ? props.labels.projects : props.labels.project}</h5>
          <ul className={classes.Projects}>
            {props.projects.map((project, index) => (
              (project.url !== '') ?
                <li key={index}><a href={project.url}>{project.name}</a></li>
                :
                <li key={index}>{project.name}</li>
            ))}
          </ul>
        </React.Fragment>
      }
    </div>
  );
};

export default work;
