"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const url = "http://localhost:4000/blog";

function RightSideBlogsList() {
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setBlogData(data.blogs);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="max-h-[600px] overflow-y-auto scrollbar-hide overflow-x-hidden">
      {blogData.length === 0 ? (
        <p>Loading...</p>
      ) : (
        blogData.map((blog: any) => (
          <Link href={`/blog/${blog._id}`} key={blog._id}>
            <div className="blog-card bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-[102%] border-2 border-black/20 dark:border-white/80 mx-3 my-1.5 min-h-[180px] py-3 grid place-content-center">
              <div className="flex items-center mx-2 px-2 pl-5 space-x-2">
                <div className="rounded-full bg-red-500 w-[80px] h-[80px] overflow-hidden">
                  <Image
                    src={"http://localhost:4000" + blog.image}
                    alt="Author's picture"
                    width={80}
                    height={40}
                    className="w-20 h-20 bg-gray-300 object-cover rounded-full"
                  />
                </div>

                <div className="px-4 w-[250px]">
                  <p className="blog-author text-black font-sans font-semibold">
                    By {blog.author}
                  </p>
                  <h2 className="blog-title text-2xl font-bold mb-2 text-black font-serif">
                    {blog.title}
                  </h2>
                  <p className="blog-date text-gray-500 dark:text-gray-400 text-sm mt-1">
                    {new Date(blog.date_time).toLocaleDateString()} -{" "}
                    {new Date(blog.date_time).toLocaleTimeString()}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))
      )}
    </div>
  );
}

export default RightSideBlogsList;
