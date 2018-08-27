import React from 'react';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import Logo from '../UI/Logo/Logo';
import classes from './Header.scss';

const header = (props) => {
  const headerClasses = [classes.Header];
  headerClasses.push(props.isHomePage ? classes.Home : classes.Usual);
  return(
    <header className={headerClasses.join(' ')}>
      <Toolbar
        toggleSidePanel={props.toggleSidePanel}
        toggleLanguage={props.toggleLanguage}
        displayLogo={!props.isHomePage} />
      {props.isHomePage &&
        <Logo smallLogo={!props.isHomePage}/>
      }
    </header>
  );
};

export default header;
