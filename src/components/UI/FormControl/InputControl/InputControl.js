import React, { Component } from 'react';
import textControl from '../TextControl/TextControl';
import classes from './InputControl.scss';

class InputControl extends Component {

  render() {
    const inputClasses = this.props.controlClasses.map(controlClass => (
      classes[controlClass] || ''
    ));
    return (
      <input
        className={inputClasses.join(' ')}
        type={this.props.config.subtype}
        id={this.props.name}
        value={this.props.value}
        name={this.props.name}
        onChange={this.props.changedHandler} />
    );
  }
}

export default textControl(InputControl);
