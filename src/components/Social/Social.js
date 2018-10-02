import React from 'react';
import { translate } from 'react-i18next';
import FontIcon from '../UI/FontIcon/FontIcon';
import classes from './Social.scss';

const social = (props) => {
  return (
    <ul className={classes.Social}>
      {props.t('social', { returnObjects: true }).map((link) => (
        <li key={link.name}>
          <a
            href={link.url}
            target="_blank"
            aria-label={link.label}>
            <FontIcon iconType={link.name} />
          </a>
        </li>
      ))}
    </ul>
  );
};


export default translate('contact')(social);
