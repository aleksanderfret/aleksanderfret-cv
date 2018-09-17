import React, { Component } from 'react';
import Label from '../ControlLabel/ControlLabel';
import withValidation from '../withValidation/withValidation';
import ControlHelpButton from '../../Button/ControlHelpButton/ControlHelpButton';
import classes from './TextareaControl.scss';

class TextareaControl extends Component {
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
          onChange={(event) => { this.props.changeHandler(event.target.value) }}
          onBlur={(event) => { this.props.blurHandler(event.target.value) }}>
        </textarea>
        {this.props.config.info &&
          <ControlHelpButton
            label={this.props.t(this.props.config.label)}
            clicked={(event) => { this.props.openTip(event) }} />
        }
      </React.Fragment>
    );
  }
}

export default withValidation(TextareaControl);
