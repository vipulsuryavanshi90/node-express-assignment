import Joi from 'joi';

export const userSchema = Joi.object({
  username: Joi.string().min(3).max(24).required(),
  email: Joi.string().email().required(),
  type: Joi.string().required(),
  password: Joi.string()
    .min(3)
    .max(24)
    .pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\W).*$'))
    .required(),
});
