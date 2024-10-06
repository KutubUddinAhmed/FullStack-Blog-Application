// creating user validation using joi.

const joi = require("joi");

const signupValidation = (req, res, next) => {
  const schema = joi.object({
    name: joi.string().min(3).max(20).required(),
    usertype: joi.string().required(),
    email: joi.string().email().required(),
    password: joi.string().min(4).max(6).required(),
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ msgs: "Bad Request", error });
  }
  next();
};
const loginValidation = (req, res, next) => {
  const schema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().min(4).max(6).required(),
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ msgs: "Bad Request", error });
  }
  next();
};

module.exports = { signupValidation, loginValidation };
