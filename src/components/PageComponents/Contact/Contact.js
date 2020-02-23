import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import axios from 'axios';

import controlsConfig from './controls';
import Social from 'components/Social/Social';
import Button from 'components/UI/Button/Button';
import FormControl from 'components/UI/FormControl/FormControl';
import Spinner from 'components/UI/Spinner/Spinner';
import classes from './Contact.scss';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.header = React.createRef();
    this.state = {
      contactFormData: {
        name: {
          isBackendError: false,
          value: '',
          isValid: false
        },
        email: {
          isBackendError: false,
          value: '',
          isValid: false
        },
        message: {
          isBackendError: false,
          value: '',
          isValid: false
        },
        rodo: {
          isBackendError: false,
          value: '',
          isValid: false
        }
      },
      isFormValid: false,
      pending: false,
      visibleTipId: null,
      errorMessage: ''
    };
  }

  componentDidMount() {
    this.header.current.focus();
  }

  createFormControls = () => {
    const { contactFormData, visibleTipId } = this.state;
    const formElementArray = Object.keys(controlsConfig).map(key => ({
      field: key,
      config: controlsConfig[key]
    }));
    const formControls = formElementArray.map(control => {
      const { field, config } = control;

      return (
        <FormControl
          externalError={contactFormData[field].isBackendError}
          key={field}
          name={field}
          config={config}
          closeTip={this.closeTipHandler}
          openTip={event => this.openTipHandler(event, field)}
          isTipOpen={field === visibleTipId}
          onChange={params => this.handleFormUpdate(params, field)}
        />
      );
    });

    return formControls;
  };

  handleFormUpdate = (params, id) => {
    const { contactFormData } = this.state;
    const { value, isValid } = params;
    const updatedContactForm = {
      ...contactFormData
    };
    const updatedFormElement = {
      ...updatedContactForm[id]
    };
    const updatedState = {};

    if (value !== undefined) {
      updatedFormElement.value = value;
    }

    if (isValid !== undefined) {
      updatedFormElement.isValid = isValid;
      updatedState.isFormValid = this.checkIsFormValid(isValid, id);
    }
    updatedContactForm[id] = updatedFormElement;
    updatedState.contactFormData = { ...updatedContactForm };
    this.setState(() => ({ ...updatedState }));
  };

  checkIsFormValid = (isValid, id) => {
    const { contactFormData } = this.state;
    let isFormValid = true;

    Object.keys(contactFormData).forEach(key => {
      const isControlValid =
        key === id ? isValid : contactFormData[key].isValid;
      isFormValid = isControlValid && isFormValid;

      if (!isFormValid) {
        return isFormValid;
      }
    });

    return isFormValid;
  };

  createContactForm = () => {
    const { t } = this.props;
    const { isFormValid, pending } = this.state;
    const form = (
      <form noValidate>
        {this.createFormControls()}
        <Button
          btnType="StandardButton"
          label={t('form.submit.aria')}
          disabled={!isFormValid || pending}
          onClick={this.contactHandler}
        >
          {t('form.submit.label')}
        </Button>
      </form>
    );

    return form;
  };

  contactHandler = event => {
    event.preventDefault();
    this.setState({ pending: true });

    const { contactFormData } = this.state;
    const {
      history,
      match: { url }
    } = this.props;

    axios
      .post('api/Public/index.php', contactFormData)
      .then(response => {
        if (response.status === 200) {
          history.push(`${url}/success`);
        }
      })
      .catch(error => {
        const {
          response: { data: errors, status }
        } = error;
        let errorMessage = '';

        switch (status) {
          case 406:
            if (errors) {
              const updatedContactForm = {
                ...contactFormData
              };

              Object.keys(updatedContactForm).forEach(key => {
                updatedContactForm[key].isBackendError = errors[key];
                updatedContactForm[key].isValid = !errors[key];
              });

              this.setState(() => ({
                contactFormData: updatedContactForm,
                isFormValid: false
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
      .finally(() => {
        this.setState(() => ({
          pending: false
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
    const { errorMessage, pending } = this.state;
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
        {pending && <Spinner />}
      </div>
    );
  }
}

export default withRouter(withTranslation('contact')(Contact));
