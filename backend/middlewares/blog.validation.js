const joi = require("joi");

const blogValidation = (req, res, next) => {
  const blogSchema = joi.object({
    title: joi.string().required(),
    author: joi.string().required(),
    content: joi.string().required(),
    is_featured_blog: joi.string().required(),
    category: joi.string().required(),
  });

  const { error } = blogSchema.validate(req.body);
  if (error) {
    console.log("Error is: ", error);
    res.status(401).json({ msgs: "Bad Request" });
  }

  next();
};

module.exports = blogValidation;
