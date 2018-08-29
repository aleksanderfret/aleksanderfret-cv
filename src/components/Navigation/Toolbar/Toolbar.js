import React from 'react';
import { translate } from 'react-i18next';
import Logo from '../../UI/Logo/Logo';
import FontIcon from '../../UI/FontIcon/FontIcon';
import Button from '../../UI/Button/Button';
import NavigationItems from '../NavigationItems/NavigationItems';
import * as icons from '../../UI/FontIcon/FontIconTypes/FontIconsTypes';
import classes from './Toolbar.scss';

const toolBar = (props) => {
  const { t } = props;
  return (
    <div className={classes.Toolbar}>
      <Button
        isDisplayed={props.isHomePage}
        btnType='MenuButton'
        clicked={props.toggleSidePanel}
        label={t('menu')}>
        <FontIcon
          iconType={icons.MENU} />
      </Button>
      {!props.isHomePage &&
        <div className={classes.ToolbarNavigation}>
          <Logo
            smallLogo
            isTextLogo />
          <nav>
            <NavigationItems
              navType='toolbar'
              clicked={null}/>
          </nav>
        </div>
      }
      <Button
        isDisplayed
        btnType='LanguageButton'
        clicked={props.toggleLanguage}
        label={t('language-info')}>
        <span>{t('language-code')}</span>
      </Button>
    </div>
  );
}

export default translate('ui')(toolBar);
