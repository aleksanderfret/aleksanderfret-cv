import React, { Component } from 'react';
import textControl from '../TextControl/TextControl';
import classes from './TextareaControl.scss';

class TextareaControl extends Component {
  render() {
    const textareaClasses = this.props.controlClasses.map(controlClass => (
      classes[controlClass] || ''
    ));
    return (
      <textarea
        className={textareaClasses.join(' ')}
        id={this.props.name}
        value={this.props.value}
        name={this.props.name}
        onChange={this.props.changedHandler}>
      </textarea>
    );
  }
}

export default textControl(TextareaControl);
