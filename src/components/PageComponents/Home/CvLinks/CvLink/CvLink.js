import React from 'react';
import { Link } from 'react-router-dom';

import FontIcon from '../../../../UI/FontIcon/FontIcon';
import { CvLink, Icon, Info } from './CvLink.scss';

const pageTile = ({ content, route, title }) => (
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

export default pageTile;
