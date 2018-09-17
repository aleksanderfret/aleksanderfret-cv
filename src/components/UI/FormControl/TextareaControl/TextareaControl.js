import React, { Component } from 'react';
import { translate } from 'react-i18next';
import withValidation from '../withValidation/withValidation';
import Label from '../ControlLabel/ControlLabel';
import Error from '../../Error/Error';
import ControlHelpButton from '../../Button/ControlHelpButton/ControlHelpButton';
import classes from './TextareaControl.scss';

class TextareaControl extends Component {
  state = {
    value: ''
  }

  onChangeHandler = (event) => {
    const value = event.target.value;
    this.setState(() => ({ value }));
    this.props.changeHandler(value);
  }

  render() {
    const validationClasses = this.props.getValidationClasses().map(validationClass => (
      classes[validationClass] || ''
    ));
    const textareaClasses = [classes.Textarea, ...validationClasses];
    return (
      <React.Fragment>
        {this.props.config.label &&
          <Label
            label={this.props.config.label}
            required={this.props.config.rules.required}
            controlId={this.props.name} />
        }
        <textarea
          className={textareaClasses.join(' ')}
          id={this.props.name}
          value={this.props.value}
          name={this.props.name}
          onChange={this.onChangeHandler}
          onBlur={(event) => { this.props.blurHandler(event.target.value) }}>
        </textarea>
        {this.props.config.info &&
          <ControlHelpButton
            label={this.props.t(this.props.config.label)}
            clicked={(event) => { this.props.openTip(event) }} />
        }
        {this.props.error &&
          <Error message={this.props.t(this.props.error)} />
        }
      </React.Fragment>
    );
  }
}

export default withValidation(translate('contact')(TextareaControl));
