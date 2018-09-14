import React, { Component } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import classes from './CaptchaControl.scss';

class CaptchaControl extends Component {
  render() {
    return (
      <div
        className={classes.Captcha}>
        <ReCAPTCHA
          onChange={() => {
            this.props.changed({
              value: 1,
              isValid: true
            },
              this.props.name
            )
          }}
          sitekey='6Le3aNoSAAAAAMzqxmNnD6CnzKgbhenePFEdDZ8I'
          hl={this.props.i18n.language} />
      </div>
    );
  }
}

export default CaptchaControl;
