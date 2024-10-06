const Blog = require("../models/blog.model.js");
const blogController = async (req, res) => {
  try {
    const {
      title,
      author,
      content,
      image,
      date_time,
      is_featured_blog,
      category,
    } = req.body;

    const newBlog = new Blog({
      title,
      author,
      content,
      image,
      date_time,
      is_featured_blog,
      category,
    });

    await newBlog.save();

    res.status(201).json({ msgs: "Blog Uploded Sucessfully", sucess: true });
  } catch (error) {
    res
      .status(501)
      .json({ msgs: "Internal Server Error", error, sucess: false });
  }
};

module.exports = blogController;
