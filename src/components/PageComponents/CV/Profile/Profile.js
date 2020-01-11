import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withTranslation, Trans } from "react-i18next";
import { routes } from "../../../../data/routes.js";
import classes from "./Profile.scss";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.header = React.createRef();
  }

  componentDidMount() {
    this.header.current.focus();
  }

  getRoute = advantage => {
    for (let key in routes) {
      if (
        advantage.indexOf(
          `${routes[key].labels[this.props.i18n.language]}</1>`
        ) !== -1
      ) {
        return routes[key].route;
      }
    }
  };

  getAdvantage = (advantage, index, translationKey) => {
    let adventageJsx = null;
    if (advantage.indexOf("<1>") !== -1) {
      adventageJsx = (
        <Trans i18nKey={translationKey}>
          Tresc <Link to={this.getRoute(advantage)}>link</Link>koniec
        </Trans>
      );
    } else {
      adventageJsx = advantage;
    }
    return <p key={index}>{adventageJsx}</p>;
  };

  render() {
    return (
      <div className={classes.Profile}>
        <h3 ref={this.header} tabIndex={-1}>
          {this.props.t("title")}
        </h3>
        {this.props
          .t("professions", { returnObjects: true })
          .map((profession, professionIndex) => (
            <div className={classes.Profession} key={professionIndex}>
              <h4>{profession.name}</h4>
              {profession.advantages.map((advantage, adventageIndex) =>
                this.getAdvantage(
                  advantage,
                  adventageIndex,
                  `professions.${professionIndex}.advantages.${adventageIndex}`
                )
              )}
            </div>
          ))}
      </div>
    );
  }
}

export default withTranslation("profile")(Profile);
