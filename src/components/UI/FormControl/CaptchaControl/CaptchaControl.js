import React, { Component } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { translate } from 'react-i18next';
import withValidation from '../withValidation/withValidation';
import Error from '../../Error/Error';
import classes from './CaptchaControl.scss';

class CaptchaControl extends Component {
  render() {
    return (
      <React.Fragment>
        <div className={classes.Captcha}>
          <ReCAPTCHA
            onChange={(value) => {
              this.props.changed({
                value: value,
                isValid: true
              },
                this.props.name
              )
            }}
            sitekey='6Le3aNoSAAAAAMzqxmNnD6CnzKgbhenePFEdDZ8I'
            hl={this.props.i18n.language} />
        </div>
        {this.props.error &&
          <Error message={this.props.t(this.props.error)} />
        }
      </React.Fragment>
    );
  }
}

export default withValidation(translate('contact')(CaptchaControl));
