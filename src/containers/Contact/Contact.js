import React, { Component } from 'react';
import { translate } from 'react-i18next';
import Button from '../../components/UI/Button/Button';
import FormControl from '../../components/UI/FormControl/FormControl';
import Spinner from '../../components/UI/Spinner/Spinner';
import classes from './Contact.scss';

class Contact extends Component {
  state = {
    contactForm: {
      name: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          label: this.props.t('form.name.label'),
        },
        value: '',
        rules: {
          required: true,
          pattern: /^[a-zA-ZąćęłńóśżźĄĆĘŁŃÓŚŻŹ -']{5,60}$/,
        },
        errors: {
          required: this.props.t('form.name.errors.required'),
          pattern: this.props.t('form.name.errors.pattern'),
        },
        valid: false,
        touched: false
      },
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'email',
          label: this.props.t('form.email.label'),
        },
        value: '',
        rules: {
          required: true,
          pattern: '/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-z]{2,6}$/',
        },
        errors: {
          required: this.props.t('form.email.errors.required'),
          pattern: this.props.t('form.email.errors.pattern'),
        },
        valid: false,
        touched: false
      },
      subject: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          label: this.props.t('form.subject.label'),
        },
        value: '',
        rules: {
          required: true,
          pattern: /^[a-zA-ZąćęłńóśżźĄĆĘŁŃÓŚŻŹ0-9,.)-:(!? ']{5,500}$/,
        },
        errors: {
          required: this.props.t('form.subject.errors.required'),
          pattern: this.props.t('form.subject.errors.pattern'),
        },
        valid: false,
        touched: false
      },
      message: {
        elementType: 'textarea',
        elementConfig: {
          label: this.props.t('form.message.label'),
        },
        value: '',
        rules: {
          required: true,
          pattern: /^[a-zA-ZąćęłńóśżźĄĆĘŁŃÓŚŻŹ0-9,.)-:(!? '\n]{5,2000}$/,
        },
        errors: {
          required: this.props.t('form.message.errors.required'),
          pattern: this.props.t('form.message.errors.pattern'),
        },
        valid: false,
        touched: false
      },
      rodo: {
        elementType: 'input',
        elementConfig: {
          type: 'checkbox',
          label: this.props.t('form.rodo.label'),
        },
        value: '1',
        rules: {
          required: true,
        },
        errors: {
          required: this.props.t('form.message.errors.required'),
        },
        valid: false,
        touched: false
      },
      emailcopy: {
        elementType: 'input',
        elementConfig: {
          type: 'checkbox',
          label: this.props.t('form.emalicopy.label'),
        },
        value: '1',
        rules: {},
        errors: {},
        valid: true,
        touched: false
      },
      robot: {
        elementType: 'input',
        elementConfig: {
          type: 'checkbox',
          label: '',
        },
        value: '1',
        rules: {},
        errors: {},
        valid: true,
        touched: false
      },
      captcha: {
        elementType: 'captcha',
        elementConfig: {},
        rules: {
          required: true,
          pattern: ''
        },
        errors: {
          required: this.props.t('form.captcha.errors.required'),
          pattern: this.props.t('form.captcha.errors.pattern'),
        },
        valid: true,
        touched: false
      }
    },
    formIsValid: false,
    loading: false,
  }

  createFormControls = () => {
    const formElementArray = [];
    for (let key in this.state.contactForm) {
      formElementArray.push({
        id: key,
        config: this.state.contactForm[key]
      });
    }

    const formControls = formElementArray.map(formElement => (
      <FormControl
        key={formElement.id}
        type={formElement.config.elementType}
        config={formElement.config.elementConfig}
        value={formElement.config.value}
        invalid={!formElement.config.valid}
        errors={formElement.config.errors}
        shouldValidate={formElement.config.rules}
        touched={formElement.config.touched}
        changed={(event) => this.formControlChangeHandler(event, formElement.id)} />
    ));

    return formControls;
  }

  createContactForm = () => {
    const form = (
      <form onSubmit={this.contactHandler}>
        {this.createFormControls()}
        <Button
          btnType='Success'
          label={this.props.t('form.submit.aria')}
          disables={!this.state.formIsValid}>
          {this.props.t('form.submit.label')}
        </Button>
      </form>
    );

    return form;
  }

  contactHandler = () => {

  }

  render() {
    const form = this.state.loading ? <Spinner /> : this.createContactForm();

    return (
      <div className={classes.Contact}>
        <h3>{this.props.t('title')}</h3>
        {form}
      </div>
    );
  }
}

export default translate('contact')(Contact);
