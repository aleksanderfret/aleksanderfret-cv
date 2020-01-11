import React from 'react';
import { withTranslation } from 'react-i18next';

import FontIcon from '../UI/FontIcon/FontIcon';
import classes from './Social.scss';

const social = props => {
  const { theme, t } = props;
  const linkClass = classes[theme] ? classes[theme] : '';

  return (
    <ul className={classes.Social}>
      {t('social', { returnObjects: true }).map(link => (
        <li key={link.name}>
          <a
            className={linkClass}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            title={link.label}
            aria-label={link.label}
          >
            <FontIcon iconType={link.name} />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default withTranslation('contact')(social);
