import React from 'react';
import { translate } from 'react-i18next';
import classes from './Experience.scss';
import Work from './Work/Work';

const experience = (props) => {
  const { t } = props;
  return(
    <div className={classes.Experience}>
      <h3>{t('title')}</h3>
      <ul>
      {t('works', {returnObjects: true}).map((work, index) => (
        <li key={index}>
          <Work
            {...work}
            labels={t('labels', {returnObjects: true})}
             />
        </li>
      ))}
      </ul>
    </div>
  );
};

export default translate('experience')(experience);
