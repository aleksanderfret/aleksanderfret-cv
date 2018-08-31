import React from 'react';
import { Link } from 'react-router-dom';
import { translate, Trans } from 'react-i18next';
import { routes } from '../../../../data/routes.js';
import Profession from './Profession/Profession';
import classes from './Profile.scss';

const getRoute = (advantage, lang) => {
  for (let key in routes) {
    if(advantage.indexOf(`${routes[key].labels[lang]}</1>`) !== -1) {
      return routes[key].route;
    }
  }
}

const getAdvantage = (advantage, index, translationKey, currentLanguage) => {
  let adventageJsx = null;
  if (advantage.indexOf('<1>') !== -1) {
    adventageJsx = (
      <Trans i18nKey={translationKey}>
        Tresc <Link to={getRoute(advantage, currentLanguage)}>link</Link>koniec
      </Trans>
    );
  } else {
    adventageJsx = advantage;
  }
  return <p key={index}>{adventageJsx}</p>;
}

const profile = (props) => {
  const { t } = props;
  return(
    <div className={classes.Profile}>
      <h3>{t('title')}</h3>
        {t('professions', {returnObjects: true}).map((profession, professionIndex) => (
          <div
            className={classes.Profession}
            key={professionIndex}>
            <h4>{profession.name}</h4>
            {profession.advantages.map((advantage, adventageIndex) =>
              getAdvantage(advantage, adventageIndex, `professions.${professionIndex}.advantages.${adventageIndex}`, props.i18n.language)
            )}
          </div>
        ))}

    </div>

  );
};

export default translate('profile')(profile);