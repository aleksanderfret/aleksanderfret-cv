import React, { Component } from 'react';
import { translate } from 'react-i18next';
import Label from '../ControlLabel/ControlLabel';
import classes from './withValidation.scss';

const withValidation = (WrappedComponent) => {
  const Control = class extends Component {
    state = {
      error: null,
      value: '',
      touched: false,
    }

    checkValidity = (value, rules) => {
      let blank, inValid;
      if (!rules) {
        return;
      }
      if (rules.required) {
        blank = (value.trim() === '') ? this.props.config.errors.required : null;
      }
      if (rules.pattern) {
        inValid = (!rules.pattern.test(value)) ? this.props.config.errors.pattern : null;
      }
      return inValid || blank;
    }

    controlChangeHandler = (value) => {
      const updatedControl = { ...this.state };
      updatedControl.value = value;
      if (updatedControl.error) {
        updatedControl.error = this.checkValidity(value, this.props.config.rules);
      }
      this.setState({ ...updatedControl });
    }

    controlOnBlurHandler = (value) => {
      const updatedControl = { ...this.state };
      updatedControl.touched = true;
      updatedControl.error = this.checkValidity(value, this.props.config.rules);

      this.setState({ ...updatedControl });
      this.props.changed({
        value: value,
        isValid: !!updatedControl.error,
      },
        this.props.name
      );
    }

    getValidationClasses = () => {
      let validationClasses = [];
      if (this.props.config.rules.required) {
        validationClasses.push('Required');
      }
      if (this.props.config.rules && this.state.error && this.state.touched) {
        validationClasses.push('Invalid');
      }
      return validationClasses;
    }

    render() {
      return (
        <React.Fragment>
          {this.props.config.label &&
            <Label
              label={this.props.config.label}
              required={this.props.config.rules.required}
              controlId={this.props.name}
            />
          }
          <WrappedComponent
            {...this.props}
            value={this.state.value}
            blurHandler={this.controlOnBlurHandler}
            changedHandler={this.controlChangeHandler}
            getValidationClasses={this.getValidationClasses}
          />
          {this.state.error &&
            <div
              className={classes.ErrorMessage}
            >
              {this.props.t(this.state.error)}
            </div>
          }
        </React.Fragment>
      );
    }
  }
  return translate('contact')(Control);
}

export default withValidation;
