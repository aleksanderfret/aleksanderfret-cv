import React, { Component } from 'react';
import classes from './Button.scss';

class Button extends Component {
  state = {
    isFocused: false
  }

  toogleButtonFocus = () => {
    const isFocused = !this.state.isFocused;
    this.setState({ isFocused });
    if (isFocused) {
      document.addEventListener('keydown', this.onPressOK);
    } else {
      document.removeEventListener('keydown', this.onPressOK);
    }
  }

  onPressOK = (event) => {
    if (event.keyCode === 13 || event.keyCode === 32) {
      this.props.clicked(event);
    }
  }

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
        onFocus={this.toogleButtonFocus}
        onBlur={this.toogleButtonFocus}>{this.props.children}
      </button>
    );
  }
}

export default Button;
