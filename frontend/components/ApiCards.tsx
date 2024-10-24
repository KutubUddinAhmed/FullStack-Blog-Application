"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const url = "http://localhost:4000/blog";

function ApiCards({ triggerFetchBlogs }: any) {
  const [blogData, setBlogData]: any = useState();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url);
        const data = await response.json();
        const blogsList = data.blogs;
        console.log("Fetched data:", blogsList); // Log data structure
        setBlogData(blogsList);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, [triggerFetchBlogs]);

  return (
    <div className="overflow-y-auto max-h-full scrollbar-hide">
      {blogData?.map((blog: any) => {
        return (
          <div key={blog._id} className="overflow-x-hidded ">
            <div className="flex items-center justify-center space-x-2 bg-white p-4 h-[150px] rounded-md min-w-full mb-2 shadow-md shadow-green-200 border-[2px] border-blue-200 overflow-y-hidden ">
              <div className="image_section w-1/2 h-full flex items-center">
                <Image
                  src={
                    "http://localhost:4000" + blog.image ||
                    "/placeholder-image.jpg"
                  } // Replace with actual blog image URL
                  alt={blog.title || "Blog Image"}
                  width={100}
                  height={40}
                  className=" m-2 bg-gray-300 object-cover rounded-full"
                />
              </div>
              <div className="details_section w-2/3 ">
                <div className="md:w-full flex flex-col justify-between my-2">
                  <h2 className="text-xl dark:text-black font-bold mb-2">
                    {blog.title
                      .split(" ")
                      .map(
                        (word: any) =>
                          word.charAt(0).toUpperCase() +
                          word.slice(1).toLowerCase()
                      )
                      .join(" ")}
                  </h2>
                  <p className="text-gray-700 mb-1 truncate text-balance">
                    {blog.content.split(" ").slice(0, 6).join(" ") + "..."}
                  </p>
                  <p className="text-sm text-gray-700">
                    {blog.author
                      .split(" ")
                      .map(
                        (word: any) =>
                          word.charAt(0).toUpperCase() +
                          word.slice(1).toLowerCase()
                      )
                      .join(" ")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ApiCards;
