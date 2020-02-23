import React from 'react';
import { withTranslation } from 'react-i18next';

import Logo from 'components/UI/Logo/Logo';
import FontIcon from 'components/UI/FontIcon/FontIcon';
import Button from 'components/UI/Button/Button';
import NavigationItems from 'components/Navigation/NavigationItems/NavigationItems';
import * as icons from 'components/UI/FontIcon/FontIconTypes/FontIconsTypes';
import classes from './Toolbar.scss';

const toolBar = props => {
  const { t, isHomePage, toggleLanguage, toggleSidePanel } = props;
  const { Toolbar, ToolbarNavigation } = classes;

  return (
    <div className={Toolbar}>
      <Button
        isDisplayed={isHomePage}
        btnType="MenuButton"
        onClick={toggleSidePanel}
        label={t('menu')}
      >
        <FontIcon iconType={icons.MENU} />
      </Button>
      {!isHomePage && (
        <div className={ToolbarNavigation}>
          <Logo logoType="smallLogo" isTextLogo />
          <nav>
            <NavigationItems navType="toolbar" clicked={null} />
          </nav>
        </div>
      )}
      <Button
        isDisplayed
        btnType="LanguageButton"
        onClick={toggleLanguage}
        label={t('language-info')}
      >
        <span>{t('language-code')}</span>
      </Button>
    </div>
  );
};

export default withTranslation('ui')(toolBar);
