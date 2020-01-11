import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';

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
  };

  getFormControl = () => {
    let ControlComponent;
    const {
      config: { subtype, type }
    } = this.props;

    if (type === 'input') {
      ControlComponent = this.controls[subtype];
      if (!ControlComponent) {
        ControlComponent = this.controls.input;
      }
    } else {
      ControlComponent = this.controls[type];
    }

    return <ControlComponent {...this.props} />;
  };

  render() {
    const {
      config: { info },
      closeTip,
      isTipOpen,
      t
    } = this.props;

    return (
      <div className={classes.FormControl}>
        {this.getFormControl()}
        {isTipOpen && (
          <Tip closeTip={closeTip}>
            {t(info, { returnObjects: true }).map(message => (
              <p key={message}>{message}</p>
            ))}
          </Tip>
        )}
      </div>
    );
  }
}

export default withTranslation('contact')(FormControl);
