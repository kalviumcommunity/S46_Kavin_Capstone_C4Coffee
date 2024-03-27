const joi = require('joi');

const userValidator = (schema) => (data) =>
  schema.validate(data, { abortEarly: true });

const schema = joi.object({
  email: joi
    .string()
    .pattern(new RegExp('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'))
    .required()
    .messages({
      'any.required': 'Email is required',
      'string.pattern.base': 'Enter a valid email',
    }),
  username: joi.string().required().messages({
    'any.required': 'Username is required',
  }),
  password: joi
    .string()
    .min(4)
    .pattern(
      new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])')
    )
    .required()
    .messages({
      'any.required': 'Password is required',
      'string.min': 'Password must contain 4 characters',
      'string.pattern.base': 'Enter a strong password',
    }),
});

exports.userValidator = userValidator(schema);
