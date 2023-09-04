import * as Yup from 'yup';

const regexName = /^[^\s][\S\s]{0,15}[^\s]$/;
const regexPhone = /^38\s\(\d{3}\)\s\d{3}\s\d{2}\s\d{2}$/;

export const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required('Name is required')
    .matches(regexName, 'Name must be between 2 and 16 characters')
    .test(
      'name-validation',
      'Name must be between 2 and 16 characters',
      value => {
        return (
          value && value.replace(/\s/g, '').length >= 2 && value.length <= 16
        );
      }
    ),

  birthday: Yup.string().notRequired(),

  email: Yup.string().email('Invalid email').required('Email is required'),

  phone: Yup.string()
    .matches(regexPhone, {
      message: 'Invalid phone number',
    })
    .notRequired(),

  skype: Yup.string()
    .nullable()
    .notRequired()
    .test('skype-validation', 'No more than 16 characters', value => {
      if (value && value.replace(/\s/g, '').length >= 17) {
        throw new Yup.ValidationError(
          'No more than 16 characters',
          value,
          'skype'
        );
      }
      return true;
    }),
});
