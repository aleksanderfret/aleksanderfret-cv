import React from 'react';
import { translate } from 'react-i18next';
import NavigationItem from './NavigationItem/NavigationItem';
import FontIcon from '../../UI/FontIcon/FontIcon';
import classes from './NavigationItems.scss';

const navigationItems = (props) => {
  const navigationClasses = [];
  if (props.navType === 'toolbar') {
    navigationClasses.push(classes.NavigationItems);
  }

  const { t } = props;
  return (
    <ul className={navigationClasses.join(' ')}>
      {t('pages', { returnObjects: true }).map((page, index) => (
        <NavigationItem
          navType={props.navType}
          clicked={props.clicked}
          key={index}
          position={index}
          link={`/${page.route}`}>
          {props.icons &&
            <span className={classes.MenuIcon}>
              <FontIcon
                iconType={page.route} />
            </span>
          }
          <span>{page.name}</span>
        </NavigationItem>
      ))}
    </ul>
  );
};

export default translate('ui')(navigationItems);
