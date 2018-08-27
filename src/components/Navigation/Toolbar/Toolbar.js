import React from 'react';
import Logo from '../../UI/Logo/Logo';
import { translate } from 'react-i18next';
import classes from './Toolbar.scss';

const toolBar = (props) => {
  console.log(classes);
  return(
    <div className={classes.Toolbar}>
      <button>ham</button>
      {props.displayLogo &&
        <Logo smallLogo />
      }
      <button onClick={props.toggleLanguage}>{props.t('language')}</button>
    </div>
  );
};

export default translate('ui')(toolBar);
