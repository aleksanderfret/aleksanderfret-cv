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
      return 'errorMessage';
    }

    controlChangeHandler = (value) => {
      const updatedControl = { ...this.state };

      updatedControl.value = value;
      updatedControl.touched = true;
      updatedControl.error = this.checkValidity(updatedControl.value, this.props.config.rules);

      this.setState({ ...updatedControl });
      this.props.changed({
        value: updatedControl.value,
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
            checkValidity={this.checkValidity}
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
