const {
  signupValidation,
  loginValidation,
} = require("../middlewares/userValidation.js");
const {
  signupController,
  loginController,
} = require("../controllers/user.controller.js");
const blogValidation = require("../middlewares/blog.validation.js");
const blogController = require("../controllers/blog.controller.js");
const router = require("express").Router();

router.post("/signup", signupValidation, signupController);
router.post("/login", loginValidation, loginController);
router.post("/blog", blogValidation, blogController);

module.exports = router;
