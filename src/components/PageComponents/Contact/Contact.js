import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import axios from 'axios';

import { contactFormConfig } from '../../../data/controls';
import Social from '../../Social/Social';
import Button from '../../UI/Button/Button';
import FormControl from '../../UI/FormControl/FormControl';
import Spinner from '../../UI/Spinner/Spinner';
import classes from './Contact.scss';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.header = React.createRef();
    this.state = {
      contactFormData: {
        name: {
          backendError: '',
          value: '',
          isValid: true
        },
        email: {
          backendError: '',
          value: '',
          isValid: false
        },
        subject: {
          backendError: '',
          value: '',
          isValid: false
        },
        message: {
          backendError: '',
          value: '',
          isValid: false
        },
        rodo: {
          backendError: '',
          value: false,
          isValid: false
        },
        emailcopy: {
          value: false,
          isValid: true
        }
        // captcha: {
        //   backendError: '',
        //   value: '',
        //   isValid: false,
        // }
      },
      formIsValid: false,
      sending: false,
      visibleTipId: null,
      errorMessage: ''
    };
  }

  componentDidMount() {
    this.header.current.focus();
  }

  createFormControls = () => {
    const { contactFormData, visibleTipId } = this.state;
    const formElementArray = Object.keys(contactFormConfig).map(key => ({
      id: key,
      config: contactFormConfig[key]
    }));
    const formControls = formElementArray.map(formElement => (
      <FormControl
        externalError={contactFormData[formElement.id].backendError}
        key={formElement.id}
        name={formElement.id}
        config={formElement.config}
        closeTip={this.closeTipHandler}
        openTip={event => {
          this.openTipHandler(event, formElement.id);
        }}
        isTipOpen={formElement.id === visibleTipId}
        changed={params => {
          this.formControlChangeHandler(params, formElement.id);
        }}
      />
    ));

    return formControls;
  };

  formControlChangeHandler = (params, id) => {
    const { contactFormData } = this.state;
    const updatedContactForm = {
      ...contactFormData
    };
    const updatedFormElement = {
      ...updatedContactForm[id]
    };

    if (params.value !== undefined) {
      updatedFormElement.value = params.value;
    }

    updatedFormElement.isValid = params.isValid;
    updatedContactForm[id] = updatedFormElement;
    const formIsValid = this.checkIsFormValid(params.isValid, id);
    this.setState(() => ({
      contactFormData: updatedContactForm,
      formIsValid
    }));
  };

  checkIsFormValid = (isValid, id) => {
    const { contactFormData } = this.state;
    let formIsValid = true;

    Object.keys(contactFormData).forEach(key => {
      const isControlValid =
        key === id ? isValid : contactFormData[key].isValid;
      formIsValid = isControlValid && formIsValid;

      if (!formIsValid) {
        return formIsValid;
      }
    });

    return formIsValid;
  };

  createContactForm = () => {
    const { t } = this.props;
    const { formIsValid } = this.state;
    const form = (
      <form onSubmit={this.contactHandler} noValidate>
        {this.createFormControls()}
        <Button
          btnType="StandardButton"
          label={t('form.submit.aria')}
          disabled={formIsValid}
        >
          {t('form.submit.label')}
        </Button>
      </form>
    );

    return form;
  };

  contactHandler = event => {
    event.preventDefault();
    this.setState({ sending: true });

    const { contactFormData } = this.state;
    const {
      history,
      match: { url }
    } = this.props;

    axios
      .post('api/Public/index.php', contactFormData)
      .then(response => {
        if (response.status === 200) {
          this.setState(() => ({ sending: false }));
        }
        history.push(`${url}/success`);
      })
      .catch(error => {
        const {
          response: { data, status }
        } = error;
        let errorMessage = '';

        switch (status) {
          case 406:
            if (data) {
              const errors = { ...data };
              const updatedContactForm = {
                ...contactFormData
              };

              Object.keys(updatedContactForm).forEach(key => {
                updatedContactForm[key].backendError = errors[key];
                if (errors[key]) {
                  updatedContactForm[key].isValid = false;
                }
              });

              this.setState(() => ({
                contactFormData: updatedContactForm,
                formIsValid: false
              }));
            }
            break;
          case 400:
            errorMessage = 'form.error400';
            break;
          case 500:
            errorMessage = 'form.error500';
            break;
          default:
            errorMessage = 'form.errorUnknown';
        }
        this.setState(() => ({ errorMessage }));
      })
      .then(() => {
        this.setState(() => ({
          sending: false
        }));
      });
  };

  openTipHandler = (event, id) => {
    event.preventDefault();
    this.setState({ visibleTipId: id });
  };

  closeTipHandler = () => {
    this.setState({ visibleTipId: null });
  };

  render() {
    const form = this.createContactForm();
    const { t } = this.props;
    const { errorMessage, sending } = this.state;
    const { Contact: contactForm, ErrorMessage, Form, SocialWrapper } = classes;

    return (
      <div className={contactForm}>
        <h3 ref={this.header} tabIndex={-1}>
          {t('title')}
        </h3>
        <div className={Form}>
          <div className={SocialWrapper}>
            <Social theme="base" />
          </div>
          <hr />
          {errorMessage && <h4 className={ErrorMessage}>{t(errorMessage)}</h4>}
          {form}
        </div>
        {sending && <Spinner />}
      </div>
    );
  }
}

export default withRouter(withTranslation('contact')(Contact));
