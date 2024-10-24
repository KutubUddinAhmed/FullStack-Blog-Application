"use client";
import { useEffect, useState } from "react";
import Link from "next/link"; // Assuming you're using Next.js
import Image from "next/image"; // Assuming you're using Next.js

const url = "http://localhost:4000/blog";

function BlogPostComponent() {
  const [blogData, setBlogData] = useState([]); // No explicit typing, use dynamic state

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setBlogData(data.blogs.slice(-3)); // Accessing `blogs` from the API response and slicing to get the latest 3
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      {blogData.length === 0 ? (
        <p>Loading...</p>
      ) : (
        blogData.map((blog: any) => (
          <Link href={`/blog/${blog._id}`} key={blog._id}>
            <div className="card dark:border-none border rounded-lg shadow-lg p-4 mb-4 mt-1 bg-white dark:shadow dark:shadow-white">
              <div className="py-2 px-1">
                <h2 className="text-2xl font-serif font-bold mb-2 text-gray-900 dark:text-black">
                  {blog.title}
                </h2>
                <p className="text-gray-700 dark:text-slate-700 truncate">
                  {blog.content}
                </p>
                <p className="text-gray-700 dark:text-slate-800 font-semibold font-sans mb-4">
                  {blog.category}
                </p>

                <div className="details text-gray-500 dark:text-gray-900 text-sm flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full border overflow-hidden">
                    <Image
                      src={"http://localhost:4000" + blog.image} // Display the blog image
                      alt="Blog Image"
                      width={40}
                      height={60}
                      className="object-contain"
                    />
                  </div>
                  <p>By {blog.author}</p>
                  <div className="flex space-x-1">
                    <span>{new Date(blog.date_time).toLocaleDateString()}</span>
                    <span>{new Date(blog.date_time).toLocaleTimeString()}</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))
      )}
    </div>
  );
}

export default BlogPostComponent;
