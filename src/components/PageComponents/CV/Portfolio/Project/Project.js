import React from 'react';
import { Link } from 'react-router-dom';
import kebabCase from 'lodash/kebabCase';
import { getImage, TARGET } from '../ProjectImages/ProjectImages';
import Image from '../../../../UI/Image/Image';
import classes from './Project.scss';

const project = (props) => {
  const image = getImage(props.id, TARGET.PORTFOLIO);
  return (
    <Link
      to={`/portfolio/${kebabCase(props.id)}`}
      aria-label={props.name}>
      <div className={classes.Project}>
        <div className={classes.Preview}>
          <Image
            src={image.src}
            srcSet={image.srcSet}
            sizes='(min-width: 1200px) 33vw, (min-width: 600px) 50vw, 100vw'
            alt={props.imageAlt}
            imageClass='Project' />
        </div>
        <div className={classes.Info}>
          <div className={classes.Overlay}></div>
          <div className={classes.Content}>
            <h4 className={classes.ProjectName}>{props.name}</h4>
            <ul className={classes.Technologies}>
              {props.technologies.map((technology, index) => (
                <li key={index}>{technology}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default project;
