import React, { Component } from 'react';
import { translate } from 'react-i18next';
import Button from '../../UI/Button/Button';
import FormControl from '../../UI/FormControl/FormControl';
import Spinner from '../../UI/Spinner/Spinner';
import classes from './Contact.scss';

class Contact extends Component {
  state = {
    contactForm: {
      name: {
        type: 'input',
        subtype: 'text',
        label: 'form.name.label',
        help: 'form.name.help',
        rules: {
          required: true,
          pattern: /^[a-zA-ZąćęłńóśżźĄĆĘŁŃÓŚŻŹ -']{5,60}$/,
        },
        errors: {
          required: 'form.name.errors.required',
          pattern: 'form.name.errors.pattern',
        },
        value: '',
        isValid: false,
        isTouched: false
      },
      email: {
        type: 'input',
        subtype: 'email',
        label: 'form.email.label',
        help: 'form.email.help',
        rules: {
          required: true,
          pattern: '/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-z]{2,6}$/',
        },
        errors: {
          required: 'form.email.errors.required',
          pattern: 'form.email.errors.pattern',
        },
        value: '',
        isValid: false,
        isTouched: false
      },
      subject: {
        type: 'input',
        subtype: 'text',
        label: 'form.subject.label',
        help: 'form.subject.help',
        rules: {
          required: true,
          pattern: /^[a-zA-ZąćęłńóśżźĄĆĘŁŃÓŚŻŹ0-9,.)-:(!? ']{5,500}$/,
        },
        errors: {
          required: 'form.subject.errors.required',
          pattern: 'form.subject.errors.pattern',
        },
        value: '',
        isValid: false,
        isTouched: false
      },
      message: {
        type: 'textarea',
        label: 'form.message.label',
        help: 'form.message.help',
        rules: {
          required: true,
          pattern: /^[a-zA-ZąćęłńóśżźĄĆĘŁŃÓŚŻŹ0-9,.)-:(!? '\n]{5,2000}$/,
        },
        errors: {
          required: 'form.message.errors.required',
          pattern: 'form.message.errors.pattern',
        },
        value: '',
        isValid: false,
        isTouched: false
      },
      rodo: {
        type: 'input',
        subtype: 'checkbox',
        label: 'form.rodo.label',
        messages: 'form.rodo.messages',
        rules: {
          required: true,
        },
        errors: {
          required: 'form.rodo.errors.required',
        },
        checked: false,
        value: 1,
        isValid: false,
        isTouched: false
      },
      emailcopy: {
        type: 'input',
        subtype: 'checkbox',
        label: 'form.emailcopy.label',
        rules: {
          required: false
        },
        errors: {},
        checked: false,
        value: 1,
        isValid: false,
        isTouched: false
      },
      captcha: {
        type: 'captcha',
        rules: {
          required: false,
          pattern: ''
        },
        errors: {
          required: 'form.captcha.errors.required',
          pattern: 'form.captcha.errors.pattern',
        },
        value: 0,
        isValid: false,
        isTouched: false
      }
    },
    formIsValid: true,
    loading: false,
    visibleTipId: null
  }

  createFormControls = () => {
    const formElementArray = [];
    for (let key in this.state.contactForm) {
      formElementArray.push({
        id: key,
        config: this.state.contactForm[key]
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
          changed={this.formControlChangeHandler} />
      )
    });
    return formControls;
  }

  formControlChangeHandler = (params, id) => {
    const updatedContactForm = {
      ...this.state.contactForm
    }
    const updatedFormElement = {
      ...updatedContactForm[id]
    }

    if (updatedFormElement.checked !== 'undefined') {
      updatedFormElement.checked = params.checked;
    }
    updatedFormElement.value = params.value;
    updatedFormElement.isValid = params.isValid;
    updatedContactForm[id] = updatedFormElement;
    this.setState({
      contactForm: updatedContactForm
    });
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


  contactHandler = () => {

  }

  openTipHandler = (event, id) => {
    event.preventDefault();
    this.setState({ visibleTipId: id });
  }

  closeTipHandler = () => {
    this.setState({ visibleTipId: null });
  }

  render() {
    const form = this.state.loading ? <Spinner /> : this.createContactForm();

    return (
      <div className={classes.Contact}>
        <h3>{this.props.t('title')}</h3>
        <div className={classes.Form}>
          <h4 className={classes.Subtitle}>{this.props.t('subtitle')}</h4>
          {form}
        </div>
      </div>
    );
  }
}

export default translate('contact')(Contact);
