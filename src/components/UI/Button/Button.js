import React, { Component } from 'react';
import classes from './Button.scss';

class Button extends Component {

  render() {
    const buttonClasses = [classes.Button];
    if (classes[this.props.btnType]) {
      buttonClasses.push(classes[this.props.btnType]);
    }
    if (this.props.isDisplayed) {
      buttonClasses.push(classes.AlwaysDisplayed);
    }
    return (
      <button
        disabled={this.props.disabled}
        onClick={this.props.clicked}
        className={buttonClasses.join(' ')}
        title={this.props.label}
        aria-label={this.props.label}
      >{this.props.children}
      </button>
    );
  }
}

export default Button;
