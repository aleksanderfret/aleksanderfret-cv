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

  onPressEscape = event => {
    if (event.keyCode === 27) {
      const { closeSidePanel } = this.props;

      closeSidePanel();
    }
  };

  render() {
    const { isOpen, closeSidePanel } = this.props;
    const { Close, Header, Open, SidePanel: sidePanelClass } = classes;
    const sidePanelClasses = [sidePanelClass];

    return (
      <>
        <Overlay type="dark" isShown={isOpen} clicked={closeSidePanel} />
        <CSSTransition
          mountOnEnter
          unmountOnExit
          in={isOpen}
          timeout={300}
          classNames={{
            enter: '',
            enterActive: Open,
            exit: '',
            exitActive: Close
          }}
        >
          <div className={sidePanelClasses.join(' ')}>
            <header className={Header}>
              <Logo isTextLogo logoType="shortLogo" clicked={closeSidePanel} />
            </header>
            <nav>
              <NavigationItems
                navType="sidePanel"
                icons
                clicked={closeSidePanel}
              />
            </nav>
          </div>
        </CSSTransition>
      </>
    );
  }
}

export default SidePanel;
