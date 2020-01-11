import React, { Component } from "react";
import { withTranslation } from "react-i18next";
import classes from "./Experience.scss";
import Work from "./Work/Work";

class Experience extends Component {
  constructor(props) {
    super(props);
    this.header = React.createRef();
  }

  componentDidMount() {
    this.header.current.focus();
  }

  render() {
    return (
      <div className={classes.Experience}>
        <h3 ref={this.header} tabIndex={-1}>
          {this.props.t("title")}
        </h3>
        <ul>
          {this.props.t("works", { returnObjects: true }).map((work, index) => (
            <li key={index}>
              <Work
                {...work}
                labels={this.props.t("labels", { returnObjects: true })}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default withTranslation("experience")(Experience);
