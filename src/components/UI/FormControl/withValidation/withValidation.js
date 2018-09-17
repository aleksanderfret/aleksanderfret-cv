import React, { Component } from 'react';

const withValidation = (WrappedComponent) => {
  const Control = class extends Component {
    state = {
      error: null,
      value: '',
      touched: false,
    }

    componentDidMount() {
      if (this.props.config.value !== '') {
        this.setState({ value: this.props.config.value });
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
      if (typeof value === 'boolean') {
        this.controlOnBlurHandler(value);
      } else {
        const updatedControl = { ...this.state };
        if (updatedControl.error) {
          updatedControl.error = this.checkValidity(value, this.props.config.rules);
        }
        updatedControl.value = value;
        this.setState({ ...updatedControl });
      }
    }

    controlOnBlurHandler = (value) => {
      const updatedControl = { ...this.state };
      updatedControl.touched = true;
      updatedControl.error = this.checkValidity(value, this.props.config.rules);

      this.setState({ ...updatedControl });
      this.props.changed({
        value: (typeof value === 'boolean') ? this.props.config.value : value,
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
        <WrappedComponent
          {...this.props}
          value={this.state.value}
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
