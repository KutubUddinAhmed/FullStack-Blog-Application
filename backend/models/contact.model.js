const mongoose = require("mongoose");

const FeedBackContactSchema = new mongoose.Schema(
  {
    first_name: {
      type: String,
    },
    last_name: {
      type: String,
    },
    email: {
      type: String,
    },

    phone_number: {
      type: Number,
    },
    details: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const FeedBackContact = mongoose.model(
  "FeedBackContact",
  FeedBackContactSchema
);

module.exports = FeedBackContact;
