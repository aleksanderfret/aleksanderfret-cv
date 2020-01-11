import React, { Component } from "react";
import { withTranslation } from "react-i18next";
import SkillsCategory from "./SkillsCategory/SkillsCategory";
import classes from "./Skills.scss";

class Skills extends Component {
  constructor(props) {
    super(props);
    this.header = React.createRef();
  }

  componentDidMount() {
    this.header.current.focus();
  }

  render() {
    return (
      <div className={classes.Skills}>
        <h3 ref={this.header} tabIndex={-1}>
          {this.props.t("title")}
        </h3>
        <ul>
          {this.props.t("skills", { returnObjects: true }).map(skills => (
            <li className={classes.SkillsItems} key={skills.type}>
              <SkillsCategory {...skills} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default withTranslation("skills")(Skills);
