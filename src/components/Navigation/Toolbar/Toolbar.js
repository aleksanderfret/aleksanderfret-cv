import React from 'react';
import Logo from '../../UI/Logo/Logo';
import FontIcon from '../../UI/FontIcon/FontIcon';
import Button from '../../UI/Button/Button';
import * as icons from '../../UI/FontIcon/FontIconTypes/FontIconsTypes';
import { translate } from 'react-i18next';
import classes from './Toolbar.scss';

const toolBar = (props) => {
  const { t } = props;
  return(
    <div className={classes.Toolbar}>
      <Button
        btnType='ToolbarButton'
        clicked={null}
        title={t('menu')}
        label={t('menu')}>
        <FontIcon
          iconClass={icons.TOOLBAR}
          iconType={icons.MENU} />
      </Button>
      {props.displayLogo &&
        <Logo smallLogo />
      }
      <Button
        btnType='ToolbarButton'
        clicked={props.toggleLanguage}
        title={t('language-info')}
        label={t('language-info')}>
        <FontIcon
          iconClass={icons.TOOLBAR}
          iconType={icons.LANGUAGE} />
      </Button>
    </div>
  );
};

export default translate('ui')(toolBar);
