const joi = require("joi");

const FeedBackContactFormDataValidation = (req, res, next) => {
  const ContactSchema = joi.object({
    first_name: joi.string().required().messages({
      "any.required": "First name is required.",
      "string.empty": "First name cannot be empty.",
    }),
    last_name: joi.string().optional(),
    email: joi.string().email().required().messages({
      "string.email": "Please provide a valid email address.",
      "any.required": "Email is required.",
    }),
    phone_number: joi
      .string()
      .pattern(/^[0-9]{10}$/)
      .required()
      .messages({
        "string.pattern.base": "Phone number must be a 10-digit number.",
        "any.required": "Phone number is required.",
      }),
    details: joi.string().required().messages({
      "any.required": "Details are required.",
      "string.empty": "Details cannot be empty.",
    }),
  });

  const { error } = ContactSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ msgs: "Bad Request", error: error.details });
  }
  next();
};

module.exports = FeedBackContactFormDataValidation;
