import React from 'react';
import { Link } from 'react-router-dom';

import FontIcon from '../../../../UI/FontIcon/FontIcon';
import classes from './CvLink.scss';

const pageTile = ({ content, route, title }) => {
  const { CvLink, Icon, Info } = classes;

  return (
    <div className={CvLink}>
      <Link to={`/${route}`}>
        <div className={Icon}>
          <FontIcon iconType={route} />
        </div>
        <div className={Info}>
          <h3>{title}</h3>
          <ul>
            {content.map(text => (
              <li key={text}>{text}</li>
            ))}
          </ul>
        </div>
      </Link>
    </div>
  );
};

export default pageTile;
