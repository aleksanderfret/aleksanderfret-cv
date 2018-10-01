import React, { Component } from 'react';

const withValidation = (WrappedComponent) => {
  const Control = class extends Component {
    state = {
      error: null,
      touched: false,
    }

    componentDidUpdate(prevProps) {
      if (this.props.externalError && prevProps.externalError !== this.props.externalError) {
        this.setState(() => ({
          error: this.props.config.errors[this.props.externalError] || 'unknown error',
          touched: true
        }));
        this.props.changed({
          isValid: !this.props.externalError,
        });
      }
    }

    checkValidity = (value, rules) => {
      if (!rules) {
        return;
      }
      if (rules.required &&
        ((typeof value === 'boolean' && !value) ||
          (typeof value !== 'boolean' && value.trim() === ''))) {
        return this.props.config.errors.required;
      }
      if (rules.pattern && !rules.pattern.test(value)) {
        return this.props.config.errors.pattern;
      }
      return null;
    }

    controlChangeHandler = (value) => {
      if (typeof value === 'boolean' || this.props.config.type === 'captcha') {
        this.controlOnBlurHandler(value);
      } else {
        if (this.state.error) {
          const error = this.checkValidity(value, this.props.config.rules);
          this.setState(() => ({ error }));
        }
      }
    }

    controlOnBlurHandler = (value) => {
      const touched = true;
      const error = this.checkValidity(value, this.props.config.rules);

      this.setState(() => ({ touched, error }));
      this.props.changed({
        value,
        isValid: !error,
      });
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
        <WrappedComponent
          {...this.props}
          blurHandler={this.controlOnBlurHandler}
          changeHandler={this.controlChangeHandler}
          getValidationClasses={this.getValidationClasses}
          error={this.state.error}
        />
      );
    }
  }
  return Control;
}

export default withValidation;
