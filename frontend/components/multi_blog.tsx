import React from "react";
// Import the blogs.
import blogPosts from "@/utils/blogs/left_blogs";
import right_blogs from "@/utils/blogs/right_blogs";
import Image from "next/image";
import Link from "next/link";

function Multi_blog() {
  return (
    <section className="flex flex-wrap my-[2px] mb-4 mx-1 min-h-[600px]">
      <div className="grid grid-cols-3 gap-4 max-h-full w-full mx-[3px]">
        {/* left Side */}
        <div className="col-span-3 md:col-span-2 mt-14 p-3">
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
                Slug: string;
              },
              i: number
            ) => (
              <Link href={`/blog/${blog.Slug}`} key={i}>
                <div className="card dark:border-none border rounded-lg shadow-lg p-4 mb-4 mt-1 bg-white dark:shadow dark:shadow-white">
                  <div className="py-2 px-1">
                    <h2 className="text-2xl font-serif font-bold mb-2 text-gray-900 dark:text-black">
                      {blog.Title}
                    </h2>
                    <p className="text-gray-700 dark:text-slate-700  truncate">
                      {blog.Content}
                    </p>
                    <p className="text-gray-700 dark:text-slate-800 font-semibold font-sans mb-4">
                      {blog.category}
                    </p>

                    <div className="details text-gray-500 dark:text-gray-900 text-sm flex items-center space-x-4">
                      <div className="w-10 h-10 rounded-full border overflow-hidden">
                        <Image
                          src={blog.Image}
                          alt="Author Image"
                          width={40}
                          height={60}
                          className=" object-contain "
                        />
                      </div>
                      <p>By {blog.Author}</p>
                      <div className="flex space-x-1">
                        <span>{blog.Date}</span>
                        <span>{blog.Time}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            )
          )}
        </div>
        {/* Right Side */}
        <div className="col-span-3 md:col-span-1">
          <div className="rightCards h-600px p-4 rounded-lg">
            <span className="grid place-items-center text-3xl font-semibold mb-4">
              Latest Blog Author
            </span>
            <div className="max-h-[600px] overflow-y-auto scrollbar-hide overflow-x-hidden ">
              {right_blogs.map(
                (
                  rblogs: {
                    Title: string;
                    Author: string;
                    Image: string;
                    Date: string;
                    Time: string;
                    Slug: string;
                  },
                  i: number
                ) => (
                  <Link href={`/blog/${rblogs.Slug}`} key={i}>
                    <div className="blog-card bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-[102%] border-2 border-black/20 dark:border-white/80 mx-3 my-1.5 min-h-[180px] py-3 grid place-content-center">
                      <div className="flex items-center mx-2 px-2 pl-5 space-x-2">
                        <div className="blog-image border-2 border-black/20 rounded-full">
                          <Image
                            src={rblogs.Image}
                            alt="Author's picture"
                            width={96}
                            height={96}
                            className="w-[100px] p-2 h-[100px] rounded-full object-contain"
                          />
                        </div>

                        <div className="blog-content p-4">
                          <p className="blog-author text-black font-sans font-semibold">
                            By {rblogs.Author}
                          </p>
                          <h2 className="blog-title text-2xl font-bold mb-2 text-black font-serif">
                            {rblogs.Title}
                          </h2>
                          <p className="blog-date text-gray-500 dark:text-gray-400 text-sm mt-1">
                            {rblogs.Date} - {rblogs.Time}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Multi_blog;
