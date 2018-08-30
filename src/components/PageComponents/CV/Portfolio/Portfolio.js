import React from 'react';
import { translate } from 'react-i18next';
import classes from './Portfolio.scss';

const portfolio = (props) => {
  const { t } = props;
  return(
    <div className={classes.Portfolio}>
      <h3>{t('title')}</h3>
    </div>
  );
};

export default translate('portfolio')(portfolio);
