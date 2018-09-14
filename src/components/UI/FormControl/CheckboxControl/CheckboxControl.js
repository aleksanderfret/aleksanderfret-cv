import React, { Component } from 'react';
import FontIcon from '../../../UI/FontIcon/FontIcon';
import Label from '../ControlLabel/ControlLabel';
import classes from './CheckboxControl.scss';

class CheckboxControl extends Component {
  state = {
    value: '1',
    isValid: false,
    touched: false,
    checked: false,
  }

  checkboxClickHandler = () => {
    const updatedCheckbox = { ...this.state };
    updatedCheckbox.isValid = !updatedCheckbox.isValid;
    updatedCheckbox.checked = !updatedCheckbox.checked;
    if (!updatedCheckbox.touched) {
      updatedCheckbox.touched = !updatedCheckbox.touched;
    }

    this.setState({ ...updatedCheckbox });
    this.props.changed({
      value: updatedCheckbox.value,
      isValid: updatedCheckbox.isValid,
      checked: updatedCheckbox.checked,
    },
      this.props.name);
  }

  labelClickedHandler = (event) => {
    event.preventDefault();
    this.checkboxClickHandler();
  }

  render() {
    const checkboxClasses = [classes.Checkbox];
    if (this.props.config.required) {
      checkboxClasses.push(classes.Required);
    }
    if (this.props.config.rules && this.state.invalid && this.state.touched) {
      checkboxClasses.push(classes.Invalid);
    }
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
          value={this.state.value}
          aria-labelledby={`${this.props.name}`}
          onClick={(event) => { this.checkboxClickHandler(event, this.props.name) }}>
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

export default CheckboxControl;
