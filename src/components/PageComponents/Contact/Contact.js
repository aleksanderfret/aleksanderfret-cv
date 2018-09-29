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
      contactFromData: {
        name: {
          error: '',
          value: '',
          isValid: false
        },
        email: {
          error: '',
          value: '',
          isValid: false,
        },
        subject: {
          error: '',
          value: '',
          isValid: false,
        },
        message: {
          error: '',
          value: '',
          isValid: false,
        },
        rodo: {
          error: '',
          value: false,
          isValid: false,
        },
        emailcopy: {
          value: false,
          isValid: true,
        },
        captcha: {
          error: '',
          value: '',
          isValid: false,
        }
      },
      formIsValid: true,
      sending: false,
      visibleTipId: null
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

    updatedFormElement.value = params.value;
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
    const contact = { name: false };
    axios.post('http://localhost/aleksanderfret/api/public/index.php', contact)
      .then(response => {
        console.log(response);
        if (response.status === 200) {
          console.log('uuuuu jeeee');
        }

        this.setState(() => ({ sending: false }));
        this.props.history.push('/');
      })
      .catch(error => {
        if (error.response.status === 406) {
          console.log(error.response.data);
        }
        this.setState(() => ({ sending: false }));
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
    const form = this.state.sending ? <Spinner /> : this.createContactForm();

    return (
      <div className={classes.Contact}>
        <h3
          ref={this.header}
          tabIndex={-1}>{this.props.t('title')}</h3>
        <div className={classes.Form}>
          {form}
        </div>
      </div>
    );
  }
}

export default translate('contact')(Contact);
