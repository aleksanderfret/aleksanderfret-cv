import React from 'react';
import { Link } from 'react-router-dom';
import kebabCase from 'lodash/kebabCase';

import { getImage, TARGET } from '../ProjectImages/ProjectImages';
import Image from '../../../../UI/Image/Image';
import classes from './Project.scss';

const project = ({ id, imageAlt, name, technologies }) => {
  const { src, srcSet } = getImage(id, TARGET.PORTFOLIO);
  const {
    Info,
    Content,
    Overlay,
    Project: projectClass,
    ProjectName,
    Preview,
    Technologies
  } = classes;

  return (
    <Link to={`/portfolio/${kebabCase(id)}`} aria-label={name}>
      <div className={projectClass}>
        <div className={Preview}>
          <Image
            src={src}
            srcSet={srcSet}
            sizes="(min-width: 1200px) 33vw, (min-width: 600px) 50vw, 100vw"
            alt={imageAlt}
            imageClass="Project"
          />
        </div>
        <div className={Info}>
          <div className={Overlay} />
          <div className={Content}>
            <h4 className={ProjectName}>{name}</h4>
            <ul className={Technologies}>
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
