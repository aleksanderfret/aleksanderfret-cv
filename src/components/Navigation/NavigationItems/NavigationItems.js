import React from 'react';
import { withTranslation } from 'react-i18next';

import NavigationItem from './NavigationItem/NavigationItem';
import FontIcon from 'components/UI/FontIcon/FontIcon';
import classes from './NavigationItems.scss';

const navigationItems = ({ clicked, icons, navType, t }) => {
  const navigationClasses = [];
  const { MenuIcon, NavigationItems: navigationItemsClass } = classes;

  if (navType === 'toolbar') {
    navigationClasses.push(navigationItemsClass);
  }

  return (
    <ul className={navigationClasses.join(' ')}>
      {t('pages', { returnObjects: true }).map(({ name, route }) => (
        <NavigationItem
          navType={navType}
          clicked={clicked}
          key={route}
          position={route}
          link={`/${route}`}
        >
          {icons && (
            <span className={MenuIcon}>
              <FontIcon iconType={route} />
            </span>
          )}
          <span>{name}</span>
        </NavigationItem>
      ))}
    </ul>
  );
};

export default withTranslation('ui')(navigationItems);
