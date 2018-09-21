import React from 'react';
import { Link } from 'react-router-dom';
import kebabCase from 'lodash/kebabCase';
import { getImage } from '../ProjectHelpers/ProjectHelpers';
import Image from '../../../../UI/Image/Image';
import classes from './Project.scss';

const project = (props) => {
  const image = getImage(props.id);
  return (
    <Link
      to={`/portfolio/${kebabCase(props.id)}`}>
      <div className={classes.Project}>
        <Image
          src={image.src}
          srcSet={image.srcSet}
          sizes='(min-width: 1200px) 33vw, (min-width: 600px) 50vw, 100vw'
          alt={props.imageAlt}
          imageClass='Project' />
        <h4 className={classes.ProjectName}>{props.name}</h4>
      </div>
    </Link>
  );
};

export default project;
