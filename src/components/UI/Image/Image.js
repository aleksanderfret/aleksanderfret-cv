import React from 'react';

import classes from './Image.scss';

const image = ({ imageClass, src, srcSet, sizes, alt }) => {
  const { Image: imageStyle } = classes;
  const imageClasses = [imageStyle];
  if (imageClass) {
    imageClasses.push(imageClass);
  }

  return (
    <img
      className={imageClasses.join(' ')}
      src={src}
      sizes={sizes}
      srcSet={srcSet}
      alt={alt}
    />
  );
};

export default image;
