import React, { Component } from 'react';
import { translate } from 'react-i18next';
import axios from 'axios';
import { contactFormConfig } from '../../../data/controls';
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
          isValid: false,
        },
        subject: {
          backendError: '',
          value: '',
          isValid: false,
        },
        message: {
          backendError: '',
          value: '',
          isValid: false,
        },
        rodo: {
          backendError: '',
          value: false,
          isValid: false,
        },
        emailcopy: {
          value: false,
          isValid: true,
        },
        captcha: {
          backendError: '',
          value: '',
          isValid: false,
        }
      },
      formIsValid: true,
      sending: false,
      visibleTipId: null,
      errorMessage: '',
    }
  }

  componentDidMount() {
    this.header.current.focus();
  }

  createFormControls = () => {
    const formElementArray = [];
    for (const key in contactFormConfig) {
      formElementArray.push({
        id: key,
        config: contactFormConfig[key]
      });
    }
    const formControls = formElementArray.map(formElement => {
      return (
        <FormControl
          externalError={this.state.contactFormData[formElement.id].backendError}
          key={formElement.id}
          name={formElement.id}
          config={formElement.config}
          closeTip={this.closeTipHandler}
          openTip={(event) => { this.openTipHandler(event, formElement.id) }}
          isTipOpen={formElement.id === this.state.visibleTipId}
          changed={(params) => { this.formControlChangeHandler(params, formElement.id) }} />
      )
    });
    return formControls;
  }

  formControlChangeHandler = (params, id) => {
    const updatedContactForm = {
      ...this.state.contactFormData
    }
    const updatedFormElement = {
      ...updatedContactForm[id]
    }
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
  }

  checkIsFormValid = (isValid, id) => {
    let formIsValid = true;
    for (let key in this.state.contactFormData) {
      const isControlValid = (key === id) ? isValid : this.state.contactFormData[key].isValid;
      formIsValid = isControlValid && formIsValid;
      if (!formIsValid) {
        return formIsValid;
      }
    }
    return formIsValid;
  }

  createContactForm = () => {
    const form = (
      <form
        onSubmit={this.contactHandler}
        noValidate>
        {this.createFormControls()}
        <Button
          btnType='StandardButton'
          label={this.props.t('form.submit.aria')}
          // disabled={false}>
          disabled={!this.state.formIsValid}>
          {this.props.t('form.submit.label')}
        </Button>
      </form>
    );

    return form;
  }

  contactHandler = (event) => {
    event.preventDefault();
    this.setState({ sending: true });
    axios.post('http://localhost/aleksanderfret/api/public/index.php', this.state.contactFormData)
      .then(response => {
        if (response.status === 200) {
          this.setState(() => ({ sending: false }));
        }
      })
      .catch(error => {
        const status = error.response.status;
        let errorMessage = '';
        switch (status) {
          case 406:
            if (error.response.data) {
              const errors = { ...error.response.data };
              const updatedContactForm = {
                ...this.state.contactFormData
              }
              for (const key in updatedContactForm) {
                updatedContactForm[key].backendError = errors[key];
                if (errors[key]) {
                  updatedContactForm[key].isValid = false;
                }
              }
              console.log(updatedContactForm);
              this.setState(() => ({
                contactFormData: updatedContactForm,
                formIsValid: false
              }));
            }
            break;
          case 400:
            errorMessage = this.props.t('form.error400');
            break;
          case 500:
            errorMessage = this.props.t('form.error500');
            break;
          default:
            errorMessage = this.props.t('form.errorUnknown');
        }
        this.setState(() => ({ errorMessage }));
      })
      .then(() => {
        this.setState(() => ({
          sending: false,
        }));
      })
  }

  openTipHandler = (event, id) => {
    event.preventDefault();
    this.setState({ visibleTipId: id });
  }

  closeTipHandler = () => {
    this.setState({ visibleTipId: null });
  }

  render() {
    const form = this.createContactForm();

    return (
      <div className={classes.Contact}>
        <h3
          ref={this.header}
          tabIndex={-1}>{this.props.t('title')}</h3>
        <div className={classes.Form}>
          {this.state.errorMessage &&
            <h4 className={classes.ErrorMessage}>{this.state.errorMessage}</h4>
          }
          {form}
        </div>
        {this.state.sending &&
          <Spinner />
        }
      </div>
    );
  }
}

export default translate('contact')(Contact);
