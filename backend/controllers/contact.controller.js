const FeedBackContact = require("../models/contact.model.js");
const multer = require("multer");
const upload = multer();

const FeedbackContactController = {
  createFeedBackContact: async (req, res) => {
    upload.none();
    try {
      const { first_name, last_name, email, phone_number, details } = req.body;

      console.log("This is Reuest Body", req.body);
      // Create a new blog entry
      const newFeedBackContact = new FeedBackContact({
        first_name,
        last_name,
        email,
        phone_number,
        details,
      });

      // Save the blog to the database
      await newFeedBackContact.save();

      res.status(201).json({
        message: "FeedBack sent successfully",
        success: true,
      });
    } catch (error) {
      res.status(500).json({
        message: "Internal Server Error",
        error: error.message,
        success: false,
      });
    }
  },
  getFeedBackFormData: async (req, res) => {
    try {
      const feedBackContactFormData = await FeedBackContact.find();

      res.status(200).json({
        feedBackContactFormData,
        message: "Successfully Fetch the Data",
        success: true,
      });
    } catch (error) {
      res.status(500).json({
        message: "Internal Server Error",
        error: error.message,
        success: false,
      });
    }
  },
};

module.exports = FeedbackContactController;
