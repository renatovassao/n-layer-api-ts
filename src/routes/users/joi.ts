import Joi from "joi";

export const joiNewUser = Joi.object({
  name: Joi.string().required(),
});
