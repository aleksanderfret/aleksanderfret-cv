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
        isHomePage={props.isHomePage}
        toggleSidePanel={props.toggleSidePanel}
        toggleLanguage={props.toggleLanguage} />
      {props.isHomePage &&
        <Logo
          isTextLogo
          logoType={!props.isHomePage ? 'smallLogo': 'bigLogo'}/>
      }
    </header>
  );
};

export default header;
