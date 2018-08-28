import React, { Component } from 'react';
import { translate } from 'react-i18next';
import Logo from '../../UI/Logo/Logo';
import FontIcon from '../../UI/FontIcon/FontIcon';
import Button from '../../UI/Button/Button';
import NavigationItems from '../NavigationItems/NavigationItems';
import * as icons from '../../UI/FontIcon/FontIconTypes/FontIconsTypes';
import classes from './Toolbar.scss';

class ToolBar extends Component {
  state={
    isBtnDisplayed: true,
    isTextLogo: true
  };

  windowResizeHandler = () => {
    if (!this.props.isHomePage) {
      if (window.innerWidth > 1100) {
        this.setState({
          isBtnDisplayed: false,
          isTextLogo: true,
        });
      } else if (window.innerWidth > 900) {
        this.setState({
          isBtnDisplayed: false,
          isTextLogo: false
        });
      } else {
        this.setState({
          isBtnDisplayed: true,
          isTextLogo: true
        });
      }
    }
  }

  componentDidMount() {
    this.windowResizeHandler();
    window.addEventListener('resize', this.windowResizeHandler);
  }

  render() {
    return (
      <div className={classes.Toolbar}>
        <Button
          isDisplayed={this.state.isBtnDisplayed}
          btnType='MenuButton'
          clicked={this.props.toggleSidePanel}
          title={this.props.t('menu')}
          label={this.props.t('menu')}>
          <FontIcon
            iconType={icons.MENU} />
        </Button>
        {!this.props.isHomePage &&
          <div className={classes.ToolbarNavigation}>
            <Logo
              smallLogo
              isTextLogo={this.state.isTextLogo} />
            <nav>
              <NavigationItems />
            </nav>
          </div>
        }
        <Button
          isDisplayed
          btnType='LanguageButton'
          clicked={this.props.toggleLanguage}
          title={this.props.t('language-info')}
          label={this.props.t('language-info')}>
          <FontIcon
            iconType={icons.LANGUAGE} />
        </Button>
      </div>
    );
  }
}

export default translate('ui')(ToolBar);
