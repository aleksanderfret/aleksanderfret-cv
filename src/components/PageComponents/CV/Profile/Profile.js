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
      key => advantage.indexOf(routes[key].labels[language]) !== -1
    )[0];
  };

  getAdvantage = (advantage, index, translationKey) => {
    const advantageJsx =
      advantage.indexOf('<1>') !== -1 ? (
        <>
          <Trans i18nKey={`profile:${translationKey}`}>
            start
            <Link to={this.getRoute(advantage)}>link</Link>
            end
          </Trans>
        </>
      ) : (
        advantage
      );

    return <p key={index}>{advantageJsx}</p>;
  };

  render() {
    const { t } = this.props;
    const { Profile, Profession } = classes;

    return (
      <div className={Profile}>
        <h3 ref={this.header} tabIndex={-1}>
          {t('title')}
        </h3>
        {t('professions', { returnObjects: true }).map(
          (profession, professionIndex) => (
            <div className={Profession} key={profession.name}>
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
