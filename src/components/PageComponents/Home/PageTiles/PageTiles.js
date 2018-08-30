import React from 'react';
import { translate } from 'react-i18next';
import PageTile from './PageTile/PageTile';
import classes from './PageTiles.scss';

const pageTiles = (props) => {
  const { t } = props;
  return(
    <ul className={classes.PageTiles}>
      {t('tiles', {returnObjects: true}).map((tile, index) => (
        <li
          key={index}
          className={classes.TileWrapper}>
          <PageTile
            title={tile.name}
            route={tile.route}
            content={tile.content.map(text => text)}/>
        </li>
      ))}
    </ul>
  );
};

export default translate('home')(pageTiles);
