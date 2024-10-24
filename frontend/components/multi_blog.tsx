import React from "react";
// Import the blogs.
import blogPosts from "@/utils/blogs/left_blogs";
import right_blogs from "@/utils/blogs/right_blogs";
import Image from "next/image";
import Link from "next/link";
import BlogPostComponent from "@/utils/blogs/left_blogs";
import RightSideBlogsList from "@/utils/blogs/right_blogs";

function Multi_blog() {
  return (
    <section className="flex flex-wrap my-[2px] mb-4 mx-1 min-h-[600px]">
      <div className="grid grid-cols-3 gap-4 max-h-full w-full mx-[3px]">
        {/* left Side */}
        <div className="col-span-3 md:col-span-2 mt-14 p-3">
          <BlogPostComponent />
        </div>
        {/* Right Side */}
        <div className="col-span-3 md:col-span-1">
          <div className="rightCards h-600px p-4 rounded-lg">
            <span className="grid place-items-center text-3xl font-semibold mb-4">
              Latest Blog Author
            </span>
            <div className="max-h-[600px] overflow-y-auto scrollbar-hide overflow-x-hidden ">
              <RightSideBlogsList />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Multi_blog;
