import React from 'react';
import { withTranslation } from 'react-i18next';

import FontIcon from 'components/UI/FontIcon/FontIcon';
import classes from './Social.scss';

const social = props => {
  const { theme, t } = props;
  const linkClass = classes[theme] ? classes[theme] : '';
  const { Social: socialClass } = classes;

  return (
    <ul className={socialClass}>
      {t('social', { returnObjects: true }).map(({ name, url, label }) => (
        <li key={name}>
          <a
            className={linkClass}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            title={label}
            aria-label={label}
          >
            <FontIcon iconType={name} />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default withTranslation('contact')(social);
