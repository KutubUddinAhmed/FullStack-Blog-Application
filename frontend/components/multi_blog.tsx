import React from "react";

// Import the blogs.
import blogPosts from "@/utils/blogs/right_blogs";
import Image from "next/image";

function Multi_blog() {
  return (
    <section className="flex flex-wrap my-[2px] mb-4 mx-1 min-h-[600px]">
      <div className="grid grid-cols-3 gap-4 max-h-full w-full">
        {/* left Side */}
        <div className="col-span-3 md:col-span-2 ">
          {blogPosts.map(
            (
              blog: {
                Title: string;
                Content: string;
                Author: string;
                category: string;
                Image: string;
                Date: string;
                Time: string;
              },
              i: number
            ) => (
              <div
                key={i}
                className="card border rounded-lg shadow-lg p-4 mb-4 mt-1 bg-white dark:bg-gray-800"
              >
                <div className="py-2 px-1">
                  <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-gray-100">
                    {blog.Title}
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300  truncate">
                    {blog.Content}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    {blog.category}
                  </p>

<div className="details text-gray-500 dark:text-gray-400 text-sm flex items-center space-x-4">
  <div className="w-10 h-10 rounded-full border overflow-hidden">
    <Image src={blog.Image} alt="Author Image" width={40} height={60} className=" object-contain "/>
  </div>
  <p>
    By {blog.Author}
  </p>
  <div className="flex space-x-1">
    <span>{blog.Date}</span>
    <span>{blog.Time}</span>
  </div>
</div>
                </div>
              </div>
            )
          )}
        </div>
        {/* Right Side */}
        <div className="col-span-3 md:col-span-1 border border-black dark:border-gray-700">
          Part 2
        </div>
      </div>
    </section>
  );
}

export default Multi_blog;
