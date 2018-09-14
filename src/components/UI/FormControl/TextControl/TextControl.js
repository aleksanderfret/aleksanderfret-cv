import React, { Component } from 'react';
import capitalize from 'lodash/capitalize';
import Label from '../ControlLabel/ControlLabel';

const textControl = (WrappedComponent) => {
  return class Control extends Component {
    state = {
      value: '',
      isValid: false,
      touched: false,
    }

    checkValidity = (value, rules) => {
      return true;
    }

    controlChangeHandler = (event) => {
      const updatedControl = { ...this.state };
      updatedControl.value = event.target.value;
      updatedControl.isValid = this.checkValidity(updatedControl.value, this.props.config.rules);
      updatedControl.touched = true;
      this.setState({ ...updatedControl });
      this.props.changed({
        value: updatedControl.value,
        isValid: updatedControl.isValid,
      },
        this.props.name);
    }

    getClasses = () => {
      let controlClasses = [];
      if (this.props.config.type === 'input') {
        controlClasses.push(capitalize(this.props.config.subtype));
      } else {
        controlClasses.push(capitalize(this.props.config.type));
      }
      if (this.props.config.rules.required) {
        controlClasses.push('Required');
      }
      if (this.props.config.rules && this.state.invalid && this.state.touched) {
        controlClasses.push('Invalid');
      }
      return controlClasses;
    }

    render() {
      return (
        <React.Fragment>
          {this.props.config.label &&
            <Label
              label={this.props.config.label}
              required={this.props.config.rules.required}
              controlId={this.props.name}
            />
          }
          <WrappedComponent
            {...this.props}
            value={this.state.value}
            checkValidity={this.checkValidity}
            changedHandler={this.controlChangeHandler}
            controlClasses={this.getClasses()}
          />
        </React.Fragment>
      );
    }
  }
}

export default textControl;
