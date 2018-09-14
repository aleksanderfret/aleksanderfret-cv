import React, { Component } from 'react';
import { translate } from 'react-i18next';
import Tip from '../Tip/Tip';
import CheckboxControl from './CheckboxControl/CheckboxControl';
import InputControl from './InputControl/InputControl';
import TextareaControl from './TextareaControl/TextareaControl';
import CaptchaControl from './CaptchaControl/CaptchaControl';

import classes from './FormControl.scss';


class FormControl extends Component {
  controls = {
    captcha: CaptchaControl,
    checkbox: CheckboxControl,
    input: InputControl,
    textarea: TextareaControl
  }

  getFormControl = () => {
    let ControlComponent;
    if (this.props.config.type === 'input') {
      ControlComponent = this.controls[this.props.config.subtype];
      if (!ControlComponent) {
        ControlComponent = this.controls.input;
      }
    } else {
      ControlComponent = this.controls[this.props.config.type];
    }
    return <ControlComponent {...this.props} />;
  }

  getTipContent = () => {
    let tipMessage = null;
    if (this.props.config.help) {
      tipMessage = <p>{this.props.t(this.props.config.help)}</p>
    }
    if (this.props.config.messages) {
      tipMessage = this.props.t(
        this.props.config.messages,
        { returnObjects: true }
      ).map((message, index) => (
        <p key={index}>{message}</p>
      ));
    }
    return tipMessage;
  }

  render() {
    return (
      <div className={classes.FormControl}>
        {this.getFormControl()}
        {this.props.isTipOpen &&
          <Tip
            closeTip={this.props.closeTip}>
            {this.getTipContent()}</Tip>
        }
      </div>
    );
  }
};

export default translate('contact')(FormControl);
