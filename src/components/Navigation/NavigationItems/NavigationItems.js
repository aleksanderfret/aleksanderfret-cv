import React from 'react';
import { translate } from 'react-i18next';
import NavigationItem from './NavigationItem/NavigationItem';
import FontIcon from '../../UI/FontIcon/FontIcon';
import * as icons from '../../UI/FontIcon/FontIconTypes/FontIconsTypes';
import classes from './NavigationItems.scss';
import navigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => {
  const { t } = props;
  return(
    <ul className={classes.Navigation}>
      <NavigationItem
          sidepanel
          exact
          link='/'>
          <span>home</span>
        </NavigationItem>
      {t('pages', {returnObjects: true}).map((page, index) => (
        <NavigationItem
          sidepanel
          key={index}
          link={page.route}>
          {props.icons &&
            <span className={classes.MenuIcon}>
              <FontIcon
                iconType={page.route}/>
            </span>
          }
          <span>{page.name}</span>
        </NavigationItem>
      ))}
    </ul>
  );
};

export default translate('ui')(navigationItems);
