import React, { Component } from 'react';
import withValidation from '../withValidation/withValidation';
import FontIcon from '../../../UI/FontIcon/FontIcon';
import Label from '../ControlLabel/ControlLabel';
import classes from './CheckboxControl.scss';

class CheckboxControl extends Component {
  state = {
    checked: false,
  }

  checkboxClickHandler = () => {
    const checked = !this.state.checked;
    this.setState((prevState) => ({ checked: !prevState.checked }));
    this.props.changeHandler(checked);
  }

  labelClickedHandler = (event) => {
    event.preventDefault();
    this.checkboxClickHandler();
  }

  render() {
    const validationClasses = this.props.getValidationClasses().map(validationClass => (
      classes[validationClass] || ''
    ));
    const checkboxClasses = [classes.Checkbox, ...validationClasses];

    return (
      <React.Fragment>
        <span
          className={checkboxClasses.join(' ')}
          name={this.props.name}
          id={this.props.name}
          role={this.props.config.subtype}
          checked={this.state.checked}
          aria-checked={this.state.checked}
          tabIndex="0"
          value={this.props.value}
          aria-labelledby={`${this.props.name}`}
          onClick={this.checkboxClickHandler}>
          {this.state.checked && <FontIcon iconType='ok' />}
        </span>
        {this.props.config.label &&
          <Label
            label={this.props.config.label}
            clicked={this.labelClickedHandler}
            required={this.props.config.rules.required}
            controlId={this.props.name}
            openTip={this.props.openTip}
          />
        }
      </React.Fragment>
    );
  }
}

export default withValidation(CheckboxControl);
