import React from 'react';
import { withTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

import afretLogo from 'assets/images/afret_logo.svg';
import classes from './Logo.scss';

const logo = ({ clicked, isTextLogo, logoType, t }) => {
  const {
    Logo: logoClass,
    ShortLogo,
    SmallLogo,
    BigLogo,
    LogoImage,
    LogoText
  } = classes;
  const logoClasses = [logoClass];

  if (logoType === 'shortLogo') {
    logoClasses.push(ShortLogo);
  } else if (logoType === 'smallLogo') {
    logoClasses.push(SmallLogo);
  } else {
    logoClasses.push(BigLogo);
  }

  return (
    <NavLink
      to="/"
      exact
      onClick={clicked}
      className={logoClasses.join(' ')}
      aria-labelledby="logo-text"
    >
      <img
        className={LogoImage}
        src={afretLogo}
        alt={`${t('title')} logo`}
        aria-label={`${t('title')} ${t('subtitle')}`}
      />
      {isTextLogo && (
        <div id="logo-text" className={LogoText}>
          <h1>{t('title')}</h1>
          <h2>{t('subtitle')}</h2>
        </div>
      )}
    </NavLink>
  );
};

export default withTranslation('ui')(logo);
