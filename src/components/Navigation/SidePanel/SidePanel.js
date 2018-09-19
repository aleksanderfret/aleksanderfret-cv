import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import Overlay from '../../UI/Overlay/Overlay';
import Logo from '../../UI/Logo/Logo';
import classes from './SidePanel.scss';
import NavigationItems from '../NavigationItems/NavigationItems';

class SidePanel extends Component {

  componentDidMount() {
    document.addEventListener('keydown', this.onPressEscape);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onPressEscape);
  }

  onPressEscape = (event) => {
    if (event.keyCode === 27) {
      this.props.closeSidePanel();
    }
  }

  render() {
    const sidePanelClasses = [classes.SidePanel];
    return (
      <React.Fragment>
        <Overlay
          isShown={this.props.isOpen}
          clicked={this.props.closeSidePanel} />
        <CSSTransition
          mountOnEnter
          unmountOnExit
          in={this.props.isOpen}
          timeout={300}
          classNames={{
            enter: '',
            enterActive: classes.Open,
            exit: '',
            exitActive: classes.Close
          }}>
          <div className={sidePanelClasses.join(' ')}>
            <header className={classes.Header}>
              <Logo
                isTextLogo
                logoType='shortLogo'
                clicked={this.props.closeSidePanel} />
            </header>
            <nav>
              <NavigationItems
                navType='sidePanel'
                icons
                clicked={this.props.closeSidePanel} />
            </nav>
          </div>
        </CSSTransition>
      </React.Fragment>
    );
  }
};

export default SidePanel;
