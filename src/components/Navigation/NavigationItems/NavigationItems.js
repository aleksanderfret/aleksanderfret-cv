import React from 'react';
import { withTranslation } from 'react-i18next';

import NavigationItem from './NavigationItem/NavigationItem';
import FontIcon from '../../UI/FontIcon/FontIcon';
import classes from './NavigationItems.scss';

const navigationItems = props => {
  const navigationClasses = [];
  const { navType, t } = props;

  if (navType === 'toolbar') {
    navigationClasses.push(classes.NavigationItems);
  }

  return (
    <ul className={navigationClasses.join(' ')}>
      {t('pages', { returnObjects: true }).map((page, index) => (
        <NavigationItem
          navType={props.navType}
          clicked={props.clicked}
          key={page.route}
          position={index}
          link={`/${page.route}`}
        >
          {props.icons && (
            <span className={classes.MenuIcon}>
              <FontIcon iconType={page.route} />
            </span>
          )}
          <span>{page.name}</span>
        </NavigationItem>
      ))}
    </ul>
  );
};

export default withTranslation('ui')(navigationItems);
