import React from 'react';
import Overlay from '../../UI/Overlay/Overlay';
import Logo from '../../UI/Logo/Logo';
import classes from './SidePanel.scss';
import NavigationItems from '../NavigationItems/NavigationItems';

const sidePanel = (props) => {
  const sidePanelClasses = [classes.SidePanel];
  sidePanelClasses.push(props.isOpen ? classes.Open : classes.Close);
  return(
    <React.Fragment>
      <Overlay
         isShown={props.isOpen}
         clicked={props.closeSidePanel}/>
      <div className={sidePanelClasses.join(' ')}>
        <header className={classes.Header}>
          <Logo
            isTextLogo
            smallLogo />
        </header>
        <nav>
          <NavigationItems
            sidePanel
            icons
            clicked={props.closeSidePanel}/>
        </nav>
      </div>
    </React.Fragment>
  );
};

export default sidePanel;
