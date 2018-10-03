import React, { Component } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { translate } from 'react-i18next';
import withValidation from '../withValidation/withValidation';
import Error from '../../Error/Error';
import classes from './CaptchaControl.scss';

class CaptchaControl extends Component {
  render() {
    return (
      <div className={classes.CaptchaWrapper}>
        <div className={classes.Captcha}>
          <ReCAPTCHA
            onChange={(value) => {
              this.props.changeHandler(value);
            }}
            sitekey='6LcGYnMUAAAAAL8z065UHySmDPqg0DbC-3q2fb_w'
            hl={this.props.i18n.language} />
        </div>
        {this.props.error &&
          <Error message={this.props.t(this.props.error)} />
        }
      </div>
    );
  }
}

export default withValidation(translate('contact')(CaptchaControl));
