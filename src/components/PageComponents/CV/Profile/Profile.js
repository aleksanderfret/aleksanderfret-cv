import React from 'react';
import { translate } from 'react-i18next';
import classes from './Profile.scss';

const profile = (props) => {
  const { t } = props;
  return(
    <div className={classes.Profile}>
      <h3>{t('title')}</h3>
    </div>
  );
};

export default translate('profile')(profile);