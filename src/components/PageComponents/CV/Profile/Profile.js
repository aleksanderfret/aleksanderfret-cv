import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withTranslation, Trans } from 'react-i18next';

import { routes } from '../../../../data/routes';
import classes from './Profile.scss';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.header = React.createRef();
  }

  componentDidMount() {
    this.header.current.focus();
  }

  getRoute = advantage => {
    const {
      i18n: { language }
    } = this.props;

    return Object.keys(routes).filter(
      key => advantage.indexOf(`${routes[key].labels[language]}</1>`) !== -1
    )[0];
  };

  getAdvantage = (advantage, index, translationKey) => {
    let advantageJsx = null;

    if (advantage.indexOf('<1>') !== -1) {
      advantageJsx = (
        <Trans i18nKey={translationKey}>
          Tresc
          <Link to={this.getRoute(advantage)}>link</Link>
          koniec
        </Trans>
      );
    } else {
      advantageJsx = advantage;
    }

    return <p key={index}>{advantageJsx}</p>;
  };

  render() {
    const { t } = this.props;

    return (
      <div className={classes.Profile}>
        <h3 ref={this.header} tabIndex={-1}>
          {t('title')}
        </h3>
        {t('professions', { returnObjects: true }).map(
          (profession, professionIndex) => (
            <div className={classes.Profession} key={profession.name}>
              <h4>{profession.name}</h4>
              {profession.advantages.map((advantage, advantageIndex) =>
                this.getAdvantage(
                  advantage,
                  advantageIndex,
                  `professions.${professionIndex}.advantages.${advantageIndex}`
                )
              )}
            </div>
          )
        )}
      </div>
    );
  }
}

export default withTranslation('profile')(Profile);
