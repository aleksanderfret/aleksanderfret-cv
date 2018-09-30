export const contactFormConfig = {
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
    }
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
    }
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
    }
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
    }
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
    value: 1,
  },
  emailcopy: {
    type: 'input',
    subtype: 'checkbox',
    label: 'form.emailcopy.label',
    rules: {
      required: false
    },
    errors: {},
    value: 1,
  },
  captcha: {
    type: 'captcha',
    rules: {
      required: true,
      pattern: ''
    },
    errors: {
      required: 'form.captcha.errors.required',
      pattern: 'form.captcha.errors.pattern',
    }
  }
};