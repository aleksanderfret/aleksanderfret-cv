import React from 'react';
import { withTranslation } from 'react-i18next';

import CvLink from './CvLink/CvLink';
import classes from './CvLinks.scss';

const pageTiles = props => {
  const { t } = props;
  const { CvLinks, CvLinkWrapper } = classes;

  return (
    <ul className={CvLinks}>
      {t('tiles', { returnObjects: true }).map(tile => (
        <li key={tile.name} className={CvLinkWrapper}>
          <CvLink
            title={tile.name}
            route={tile.route}
            content={tile.content.map(text => text)}
          />
        </li>
      ))}
    </ul>
  );
};

export default withTranslation('home')(pageTiles);
