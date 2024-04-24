const Joi = require("joi");

const signupSchema = Joi.object({
  email: Joi.string()
    .pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
    .required()
    .messages({
      "string.empty": "Email is required",
      "string.pattern.base": "Enter a valid email",
    }),
  username: Joi.string()
    .required()
    .messages({ "string.empty": "Username is required" }),
  password: Joi.string()
    .min(6)
    .pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/)
    .required()
    .messages({
      "string.empty": "Password is required",
      "string.min": "Password must at least contain 6 characters",
      "string.pattern.base": "Enter a strong password",
    }),
});

function signupValidator(req, res, next) {
  const { error, value } = signupSchema.validate(req.body);
  if (error) {
    req.error = error.details[0].message;
  } else {
    req.value = value;
  }
  next();
}

const loginSchema = Joi.object({
  username: Joi.string().messages({ "string.empty": "Username is required" }),
  password: Joi.string().messages({ "string.empty": "Password is required" }),
});

function loginValidator(req, res, next) {
  const { error, value } = loginSchema.validate(req.body);
  if (error) {
    req.error = error.details[0].message;
  } else {
    req.value = value;
  }
  next();
}

module.exports = { signupValidator, loginValidator };
