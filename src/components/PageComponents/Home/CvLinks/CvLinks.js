import React from 'react';
import { translate } from 'react-i18next';
import CvLink from './CvLink/CvLink';
import classes from './CvLinks.scss';

const pageTiles = (props) => {
  const { t } = props;
  return(
    <ul className={classes.CvLinks}>
      {t('tiles', {returnObjects: true}).map((tile, index) => (
        <li
          key={index}
          className={classes.CvLinkWrapper}>
          <CvLink
            title={tile.name}
            route={tile.route}
            content={tile.content.map(text => text)}/>
        </li>
      ))}
    </ul>
  );
};

export default translate('home')(pageTiles);
