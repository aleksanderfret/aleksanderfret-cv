import React from 'react';
import { translate } from 'react-i18next';
import classes from './Toolbar.scss';

const toolBar = (props) => {
  return(
    <React.Fragment>
      <button onClick={props.toggleLanguage}>{props.t('language')}</button>
    </React.Fragment>
  );
};

export default translate('ui')(toolBar);
