import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';

import withValidation from 'components/UI/FormControl/withValidation/withValidation';
import Label from 'components/UI/FormControl/ControlLabel/ControlLabel';
import Error from 'components/UI/Error/Error';
import ControlHelpButton from 'components/UI//Button/ControlHelpButton/ControlHelpButton';
import classes from './InputControl.scss';

class InputControl extends Component {
  state = {
    value: ''
  };

  onChangeHandler = event => {
    const { value } = event.target;
    const { onChange } = this.props;
    this.setState(
      () => ({ value }),
      () => onChange(value)
    );
  };

  render() {
    const { Input: inputClass } = classes;
    const {
      onBlur,
      config: { info, label, required, subtype },
      error,
      name,
      openTip,
      t
    } = this.props;
    const { value } = this.state;

    const inputClasses = [inputClass];

    if (error) {
      inputClasses.push(classes.Invalid);
    }

    return (
      <>
        {label && <Label label={label} required={required} controlId={name} />}
        <input
          className={inputClasses.join(' ')}
          type={subtype}
          id={name}
          value={value}
          name={name}
          onChange={this.onChangeHandler}
          onBlur={event => {
            onBlur(event.target.value);
          }}
        />
        {info && (
          <ControlHelpButton
            label={t(label)}
            clicked={event => {
              openTip(event);
            }}
          />
        )}
        {error && <Error message={t(error)} />}
      </>
    );
  }
}

export default withValidation(withTranslation('contact')(InputControl));
