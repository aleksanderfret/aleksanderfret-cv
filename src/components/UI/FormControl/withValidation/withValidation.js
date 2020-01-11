import React, { Component } from 'react';

const withValidation = WrappedComponent => {
  const Control = class extends Component {
    state = {
      error: null,
      touched: false
    };

    componentDidUpdate(prevProps) {
      const { externalError } = this.props;
      const { externalError: prevExternalError } = prevProps;
      const hasExternalErrorChanged =
        externalError && prevExternalError !== externalError;
      if (hasExternalErrorChanged) {
        this.updateError();
      }
    }

    updateError = () => {
      const {
        changed,
        config: { errors },
        externalError
      } = this.props;
      this.setState(() => ({
        error: errors[externalError] || 'unknown error',
        touched: true
      }));
      changed({
        isValid: !externalError
      });
    };

    checkValidity = (value, rules) => {
      if (!rules) {
        return;
      }

      const { pattern, required } = rules;
      const {
        config: {
          errors: { pattern: patternMessage, required: requiredMessage }
        }
      } = this.props;
      if (
        required &&
        ((typeof value === 'boolean' && !value) ||
          (typeof value !== 'boolean' && value.trim() === ''))
      ) {
        return requiredMessage;
      }
      if (pattern && !pattern.test(value)) {
        return patternMessage;
      }

      return null;
    };

    controlChangeHandler = value => {
      const {
        config: { rules, type }
      } = this.props;
      const { error } = this.state;
      if (typeof value === 'boolean' || type === 'captcha') {
        this.controlOnBlurHandler(value);
      } else if (error) {
        const newError = this.checkValidity(value, rules);
        this.setState(() => ({ error: newError }));
      }
    };

    controlOnBlurHandler = value => {
      const {
        changed,
        config: { rules }
      } = this.props;
      const touched = true;
      const error = this.checkValidity(value, rules);

      this.setState(() => ({ touched, error }));
      changed({
        value,
        isValid: !error
      });
    };

    getValidationClasses = () => {
      const validationClasses = [];
      const {
        config: {
          rules,
          rules: { required }
        }
      } = this.props;
      const { error, touched } = this.state;
      const editedAnaInvalid = rules && error && touched;

      if (required) {
        validationClasses.push('Required');
      }
      if (editedAnaInvalid) {
        validationClasses.push('Invalid');
      }

      return validationClasses;
    };

    render() {
      const { error } = this.state;

      return (
        <WrappedComponent
          {...this.props}
          blurHandler={this.controlOnBlurHandler}
          changeHandler={this.controlChangeHandler}
          getValidationClasses={this.getValidationClasses}
          error={error}
        />
      );
    }
  };

  return Control;
};

export default withValidation;
