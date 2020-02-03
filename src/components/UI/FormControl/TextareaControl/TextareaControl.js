import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';

import withValidation from '../withValidation/withValidation';
import Label from '../ControlLabel/ControlLabel';
import Error from '../../Error/Error';
import ControlHelpButton from '../../Button/ControlHelpButton/ControlHelpButton';
import classes from './TextareaControl.scss';

class TextareaControl extends Component {
  state = {
    value: ''
  };

  onChangeHandler = event => {
    const { value } = event.target;
    const { changeHandler } = this.props;
    this.setState(() => ({ value }));
    changeHandler(value);
  };

  render() {
    const { Textarea: textareaClass } = classes;
    const {
      blurHandler,
      config: {
        info,
        label,
        rules: { required }
      },
      error,
      getValidationClasses,
      name,
      openTip,
      t
    } = this.props;
    const { value } = this.state;
    const validationClasses = getValidationClasses().map(
      validationClass => classes[validationClass] || ''
    );
    const textareaClasses = [textareaClass, ...validationClasses];

    return (
      <>
        {label && <Label label={label} required={required} controlId={name} />}
        <textarea
          className={textareaClasses.join(' ')}
          id={name}
          value={value}
          name={name}
          onChange={this.onChangeHandler}
          onBlur={event => {
            blurHandler(event.target.value);
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

export default withValidation(withTranslation('contact')(TextareaControl));
