// blog.controller.js

const Blog = require("../models/blog.model.js");

const blogController = {
  createBlog: async (req, res) => {
    const imagePath = req.file ? `/uploads/${req.file.filename}` : null; // Handle uploaded image
    try {
      const { title, author, content, date_time, is_featured_blog, category } =
        req.body;

      // Create a new blog entry
      const newBlog = new Blog({
        title,
        author,
        content,
        image: imagePath,
        date_time,
        is_featured_blog,
        category,
      });

      // Save the blog to the database
      await newBlog.save();

      // Respond with a success message
      res.status(201).json({
        message: "Blog uploaded successfully",
        success: true,
      });
    } catch (error) {
      console.error("Error uploading blog:", error); // Log the error for debugging
      res.status(500).json({
        message: "Internal Server Error",
        error: error.message || error,
        success: false,
      });
    }
  },

  getAllBlogs: async (req, res) => {
    try {
      const blogs = await Blog.find(); // Fetch all blogs from the database
      res
        .status(200)
        .json({ blogs, message: "Successfully Fetch the Data", success: true }); // Send the blogs to the frontend
    } catch (error) {
      res.status(500).json({
        message: "Error fetching blogs",
        error: error.message || error,
        success: false,
      });
    }
  },

  getBlogId: async (req, res) => {
    try {
      const blog = await Blog.findById(req.params.id); // Use 'await' to get the result of the promise
      if (!blog) {
        return res.status(404).json({ message: "Blog not found" });
      }
      res.status(200).json(blog);
    } catch (error) {
      res.status(500).json({ message: "Error fetching blog", error });
    }
  },
};

module.exports = blogController;
