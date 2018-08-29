import React from 'react';
import classes from './Image.scss';

const image = (props) => {
  const imageClasses = [classes.Image];
  if (props.imageClass) {
    imageClasses.push(props.imageClass);
  }

  return(
    <img
      className={imageClasses.join(' ')}
      src={props.src}
      sizes={props.sizes}
      srcSet={props.srcSet}
      alt={props.alt} />
  );
};

export default image;
