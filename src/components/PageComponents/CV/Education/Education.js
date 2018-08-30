import React from 'react';
import { translate } from 'react-i18next';
import classes from './Education.scss';

const education = (props) => {
  const { t } = props;
  return(
    <div className={classes.Education}>
      <h3>{t('title')}</h3>
    </div>
  );
};

export default translate('education')(education);
