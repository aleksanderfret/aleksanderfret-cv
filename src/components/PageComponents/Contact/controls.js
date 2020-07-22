import isEmail from 'validator/lib/isEmail';
import isLength from 'validator/lib/isLength';

const isEqual = p => v => v === p;
const validate = f => o => v => f(v, o);

const checkLength = validate(isLength);
const checkIsAccepted = isEqual('accepted');

export default {
  name: {
    type: 'input',
    subtype: 'text',
    label: 'form.name.label',
    info: 'form.name.info',
    required: true,
    validation: {
      message: 'form.name.error',
      validate: checkLength({ min: 3, max: 32 })
    }
  },
  email: {
    type: 'input',
    subtype: 'email',
    label: 'form.email.label',
    info: 'form.email.info',
    required: true,
    validation: {
      message: 'form.email.error',
      validate: isEmail
    }
  },
  message: {
    type: 'textarea',
    label: 'form.message.label',
    info: 'form.message.info',
    required: true,
    validation: {
      message: 'form.message.error',
      validate: checkLength({ min: 5, max: 2000 })
    }
  },
  rodo: {
    type: 'input',
    subtype: 'checkbox',
    label: 'form.rodo.label',
    info: 'form.rodo.info',
    labelButtonValue: 'form.rodo.labelButtonValue',
    required: true,
    validation: {
      message: 'form.rodo.error',
      validate: checkIsAccepted
    },
    value: 'accepted'
  }
};
