import React, { Component } from 'react';
import withValidation from '../withValidation/withValidation';
import ControlHelpButton from '../../Button/ControlHelpButton/ControlHelpButton';
import classes from './InputControl.scss';


class InputControl extends Component {

  render() {
    const validationClasses = this.props.getValidationClasses().map(validationClass => (
      classes[validationClass] || ''
    ));
    const inputClasses = [classes.Input, ...validationClasses];

    return (
      <React.Fragment>
        <input
          className={inputClasses.join(' ')}
          type={this.props.config.subtype}
          id={this.props.name}
          value={this.props.value}
          name={this.props.name}
          onChange={(event) => { this.props.changeHandler(event.target.value) }}
          onBlur={(event) => { this.props.blurHandler(event.target.value) }} />
        {this.props.config.help &&
          <ControlHelpButton clicked={(event) => { this.props.openTip(event) }} />
        }
      </React.Fragment>
    );
  }
}

export default withValidation(InputControl);
