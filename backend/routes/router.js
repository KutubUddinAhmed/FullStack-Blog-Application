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
const multer = require("multer");
const path = require("path");
const FeedbackContactController = require("../controllers/contact.controller.js");
const FeedBackContactFormDataValidation = require("../middlewares/contact.validation.js");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../uploads")); // Set correct relative path
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname); // Save file with unique name
  },
});

const upload = multer({ storage });

router.post("/signup", signupValidation, signupController);
router.post("/login", loginValidation, loginController);
router.post(
  "/blog",
  upload.single("blogImage"),
  blogValidation,
  blogController.createBlog
);

// creating a get method to send the data

router.get("/blog", blogController.getAllBlogs);

// Creating a get method to fetch blog id
router.get("/blog/:id", blogController.getBlogId);

router.post(
  "/contact",
  FeedBackContactFormDataValidation,
  FeedbackContactController.createFeedBackContact
);
router.get("/contact", FeedbackContactController.getFeedBackFormData);

module.exports = router;
