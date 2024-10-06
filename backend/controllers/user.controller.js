const User = require("../models/user.model.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const signupController = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // If Exits?
    const user = await User.findOne({ email });
    if (user) {
      return res
        .status(409)
        .json({ msgs: "User Already Exist", sucess: false });
    }

    //   Create new user
    const usermodel = new User({ name, email, password });
    //   Encrypt the password
    usermodel.password = await bcrypt.hash(password, 10);

    //   save the new user
    await usermodel.save();

    return res
      .status(201)
      .json({ msgs: "User Registered Successfully", sucess: true });
  } catch (error) {
    return res.status(500).json({ msgs: "Internal Server Error" }, error);
  }
};

const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    // Check if user already exist
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ msgs: "Invalid Credentials" });
    }

    // Compare the passwords

    const isPassword = await bcrypt.compare(password, user.password);
    if (!isPassword) {
      return res.status(401).json({ msgs: "Invalid Passwords" });
    }

    // Authentication using JWT
    const jwt_token = jwt.sign(
      { email: user.email, _id: user._id },
      process.env.JWT_SECRET_TOKEN,
      { expiresIn: "1d" }
    );

    return res.status(201).json({
      msgs: "Login Successfully!!!",
      jwt_token,
      email,
      name: user.name,
    });
  } catch (error) {
    return res
      .status(501)
      .json({ mgs: "Internal Server Error", sucess: false }, error);
  }
};

module.exports = { signupController, loginController };
