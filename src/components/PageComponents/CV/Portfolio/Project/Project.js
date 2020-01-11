import React from 'react';
import { Link } from 'react-router-dom';
import kebabCase from 'lodash/kebabCase';

import { getImage, TARGET } from '../ProjectImages/ProjectImages';
import Image from '../../../../UI/Image/Image';
import classes from './Project.scss';

const project = ({ id, imageAlt, name, technologies }) => {
  const { src, srcSet } = getImage(id, TARGET.PORTFOLIO);

  return (
    <Link to={`/portfolio/${kebabCase(id)}`} aria-label={name}>
      <div className={classes.Project}>
        <div className={classes.Preview}>
          <Image
            src={src}
            srcSet={srcSet}
            sizes="(min-width: 1200px) 33vw, (min-width: 600px) 50vw, 100vw"
            alt={imageAlt}
            imageClass="Project"
          />
        </div>
        <div className={classes.Info}>
          <div className={classes.Overlay} />
          <div className={classes.Content}>
            <h4 className={classes.ProjectName}>{name}</h4>
            <ul className={classes.Technologies}>
              {technologies.map(technology => (
                <li key={technology}>{technology}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default project;
