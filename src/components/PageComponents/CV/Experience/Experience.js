import React from 'react';
import { translate } from 'react-i18next';
import classes from './Experience.scss';

const experience = (props) => {
  const { t } = props;
  return(
    <div className={classes.Experience}>
      <h3>{t('title')}</h3>
    </div>
  );
};

export default translate('experience')(experience);
