import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { withTranslation } from 'react-i18next';

import withValidation from '../withValidation/withValidation';
import Error from '../../Error/Error';
import classes from './CaptchaControl.scss';

const CaptchaControl = ({ changeHandler, error, i18n: { language }, t }) => {
  const { Captcha, CaptchaWrapper } = classes;

  return (
    <div className={CaptchaWrapper}>
      <div className={Captcha}>
        <ReCAPTCHA
          onChange={value => {
            changeHandler(value);
          }}
          sitekey="6LcGYnMUAAAAAL8z065UHySmDPqg0DbC-3q2fb_w"
          hl={language}
        />
      </div>
      {error && <Error message={t(error)} />}
    </div>
  );
};

export default withValidation(withTranslation('contact')(CaptchaControl));
