import React from 'react';

import Toolbar from '../Navigation/Toolbar/Toolbar';
import Logo from '../UI/Logo/Logo';
import classes from './Header.scss';

const header = props => {
  const { isHomePage, toggleLanguage, toggleSidePanel } = props;
  const { Header, Home, Usual } = classes;
  const headerClasses = [Header];
  headerClasses.push(isHomePage ? Home : Usual);

  return (
    <header className={headerClasses.join(' ')}>
      <Toolbar
        isHomePage={isHomePage}
        toggleSidePanel={toggleSidePanel}
        toggleLanguage={toggleLanguage}
      />
      {isHomePage && (
        <Logo isTextLogo logoType={!isHomePage ? 'smallLogo' : 'bigLogo'} />
      )}
    </header>
  );
};

export default header;
