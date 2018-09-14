import React, { Component } from 'react';
import { translate } from 'react-i18next';
import Button from '../Button/Button';
import FontIcon from '../FontIcon/FontIcon';
import Tip from '../Tip/Tip';
import CheckboxControl from './CheckboxControl/CheckboxControl';
import InputControl from './InputControl/InputControl';
import TextareaControl from './TextareaControl/TextareaControl';
import CaptchaControl from './CaptchaControl/CaptchaControl';

import classes from './FormControl.scss';


class FormControl extends Component {
  state = {
    error: ''
  }

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
    return <ControlComponent {...this.props} changed={this.formControlChangeHandler} />;
  }

  formControlChangeHandler = (params) => {
    this.props.changed(params, this.props.name);
    if (params.error !== this.state.error) {
      this.setState({ error: params.error });
    }
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
        {this.props.config.help &&
          <Button
            btnType='controlHelpButton'
            label='pomoc'
            clicked={(event) => { this.props.openTip(event) }}>
            <FontIcon iconType='help' />
          </Button>
        }
        {this.props.isTipOpen &&
          <Tip
            closeTip={this.props.closeTip}>
            {this.getTipContent()}</Tip>
        }
        {this.state.error &&
          <div
            className={classes.ErrorMessage}>
            {this.props.t(this.state.error)}
          </div>
        }
      </div>
    );
  }
};

export default translate('contact')(FormControl);
