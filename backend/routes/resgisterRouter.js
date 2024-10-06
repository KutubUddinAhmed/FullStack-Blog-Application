const {
  signupValidation,
  loginValidation,
} = require("../middlewares/userValidation.js");
const {
  signupController,
  loginController,
} = require("../controllers/user.controller.js");
const router = require("express").Router();

router.post("/signup", signupValidation, signupController);
router.post("/login", loginValidation, loginController);

module.exports = router;
