const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    image: {
      type: String, // multer >> path = string >> path << image >> string
      required: true,
    },
    date_time: {
      type: Date,
      required: true,
      default: Date.now(),
    },
    is_featured_blog: {
      type: String,
      required: true,
      default: "null",
    },
    category: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Blog = mongoose.model("Blog", BlogSchema);

module.exports = Blog;
