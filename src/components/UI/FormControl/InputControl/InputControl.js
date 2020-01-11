import React, { Component } from "react";
import { withTranslation } from "react-i18next";
import withValidation from "../withValidation/withValidation";
import Label from "../ControlLabel/ControlLabel";
import Error from "../../Error/Error";
import ControlHelpButton from "../../Button/ControlHelpButton/ControlHelpButton";
import classes from "./InputControl.scss";

class InputControl extends Component {
  state = {
    value: ""
  };

  onChangeHandler = event => {
    const value = event.target.value;
    this.setState(() => ({ value }));
    this.props.changeHandler(value);
  };

  render() {
    const validationClasses = this.props
      .getValidationClasses()
      .map(validationClass => classes[validationClass] || "");
    const inputClasses = [classes.Input, ...validationClasses];

    return (
      <React.Fragment>
        {this.props.config.label && (
          <Label
            label={this.props.config.label}
            required={this.props.config.rules.required}
            controlId={this.props.name}
          />
        )}
        <input
          className={inputClasses.join(" ")}
          type={this.props.config.subtype}
          id={this.props.name}
          value={this.state.value}
          name={this.props.name}
          onChange={this.onChangeHandler}
          onBlur={event => {
            this.props.blurHandler(event.target.value);
          }}
        />
        {this.props.config.info && (
          <ControlHelpButton
            label={this.props.t(this.props.config.label)}
            clicked={event => {
              this.props.openTip(event);
            }}
          />
        )}
        {this.props.error && <Error message={this.props.t(this.props.error)} />}
      </React.Fragment>
    );
  }
}

export default withValidation(withTranslation("contact")(InputControl));
