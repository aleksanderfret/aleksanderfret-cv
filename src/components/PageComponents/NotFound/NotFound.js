import React from 'react';
import { withTranslation } from 'react-i18next';

import classes from './NotFound.scss';

const notFound = ({ t }) => {
  const { NotFound, NotFoundMessage } = classes;

  return (
    <div className={NotFound}>
      <p className={NotFoundMessage}>{t('notFound')}</p>
    </div>
  );
};

export default withTranslation('ui')(notFound);
