import React, { Component } from 'react';

const withValidation = WrappedComponent => {
  const Control = class extends Component {
    state = {
      error: null
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
        onChange,
        config: {
          validation: { message }
        },
        externalError
      } = this.props;

      this.setState(
        () => ({ error: message }),
        () => onChange({ isValid: !externalError })
      );
    };

    checkValidity = (type, value, validation) => {
      const { message, validate } = validation;
      const shouldNotValidate = type !== 'checkbox' && value.trim() === '';

      return shouldNotValidate || validate(value) ? null : message;
    };

    handleControlChange = value => {
      const {
        config: { subtype },
        onChange
      } = this.props;

      if (subtype === 'checkbox') {
        this.handleControlOnBlur(value);
      } else {
        onChange(value);
      }
    };

    handleControlOnBlur = value => {
      const {
        onChange,
        config: { subtype, validation }
      } = this.props;
      const error = this.checkValidity(subtype, value, validation);

      this.setState(
        () => ({ error }),
        () =>
          onChange({
            value,
            isValid: !error
          })
      );
    };

    render() {
      const { error } = this.state;

      return (
        <WrappedComponent
          {...this.props}
          onBlur={this.handleControlOnBlur}
          onChange={this.handleControlChange}
          error={error}
        />
      );
    }
  };

  Control.displayName = 'ValidatedControl';

  return Control;
};

export default withValidation;
