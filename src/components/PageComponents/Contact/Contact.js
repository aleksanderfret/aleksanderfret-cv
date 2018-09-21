import React, { Component } from 'react';
import { translate } from 'react-i18next';
import Button from '../../UI/Button/Button';
import FormControl from '../../UI/FormControl/FormControl';
import Spinner from '../../UI/Spinner/Spinner';
import classes from './Contact.scss';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.header = React.createRef();
    this.state = {
      contactForm: {
        name: {
          type: 'input',
          subtype: 'text',
          label: 'form.name.label',
          info: 'form.name.info',
          rules: {
            required: true,
            pattern: /^[a-zA-ZąćęłńóśżźĄĆĘŁŃÓŚŻŹ -']{3,60}$/,
          },
          errors: {
            required: 'form.name.errors.required',
            pattern: 'form.name.errors.pattern',
          },
          value: '',
          isValid: false
        },
        email: {
          type: 'input',
          subtype: 'email',
          label: 'form.email.label',
          info: 'form.email.info',
          rules: {
            required: true,
            pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-z]{2,6}$/,
          },
          errors: {
            required: 'form.email.errors.required',
            pattern: 'form.email.errors.pattern',
          },
          value: '',
          isValid: false,
        },
        subject: {
          type: 'input',
          subtype: 'text',
          label: 'form.subject.label',
          info: 'form.subject.info',
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
        },
        message: {
          type: 'textarea',
          label: 'form.message.label',
          info: 'form.message.info',
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
        },
        rodo: {
          type: 'input',
          subtype: 'checkbox',
          label: 'form.rodo.label',
          info: 'form.rodo.info',
          rules: {
            required: true,
          },
          errors: {
            required: 'form.rodo.errors.required',
          },
          checked: false,
          value: 1,
          isValid: false,
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
          isValid: true,
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
        }
      },
      formIsValid: false,
      loading: false,
      visibleTipId: null
    }
  }

  componentDidMount() {
    this.header.current.focus();
  }

  createFormControls = () => {
    const formElementArray = [];
    for (const key in this.state.contactForm) {
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
          changed={(params) => { this.formControlChangeHandler(params, formElement.id) }} />
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

    if (updatedFormElement.subtype !== 'checkbox') {
      updatedFormElement.value = params.value;
    } else {
      updatedFormElement.checked = params.value;
    }
    updatedFormElement.isValid = params.isValid;
    updatedContactForm[id] = updatedFormElement;

    const formIsValid = this.checkIsFormValid(params.isValid, id);
    this.setState(() => ({
      contactForm: updatedContactForm,
      formIsValid
    }));
  }

  checkIsFormValid = (isValid, id) => {
    let formIsValid = true;
    for (let key in this.state.contactForm) {
      const isControlValid = (key === id) ? isValid : this.state.contactForm[key].isValid;
      formIsValid = isControlValid && formIsValid;
      if (!formIsValid) return;
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
        <h3
          ref={this.header}
          tabIndex={-1}>{this.props.t('title')}</h3>
        <div className={classes.Form}>
          <h4 className={classes.Subtitle}>{this.props.t('subtitle')}</h4>
          {form}
        </div>
      </div>
    );
  }
}

export default translate('contact')(Contact);
