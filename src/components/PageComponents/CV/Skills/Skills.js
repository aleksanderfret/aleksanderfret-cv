import React from 'react';
import { translate } from 'react-i18next';
import classes from './Skills.scss';

const skills = (props) => {
  const { t } = props;
  return(
    <div className={classes.Skills}>
      <h3>{t('title')}</h3>
    </div>
  );
};

export default translate('skills')(skills);
