"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown"; // To render markdown

interface Blog {
  title: string;
  image: string;
  author: string;
  content: string;
  date_time: Date;
}

const BlogDetails = () => {
  const [blog, setBlog] = useState<Blog | null>(null);
  const params = useParams();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const fetchBlogData = async (blogId: string) => {
      try {
        const response = await fetch(`http://localhost:4000/blog/${blogId}`);
        const data = await response.json();

        // Use gray-matter to parse blog content if it's in Markdown format
        const { content, data: metadata } = matter(data.content); // `data.content` should be your markdown string
        setBlog({
          ...data,
          content, // Parsed markdown content
        });
      } catch (error) {
        console.error("Error fetching blog:", error);
      }
    };

    if (isMounted) {
      const { id } = params;
      if (id) {
        fetchBlogData(id as string);
      }
    }
  }, [params, isMounted]);

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container p-4 max-w-6xl mx-auto bg-white dark:bg-gray-900 transition-colors duration-300">
      <h1 className="text-4xl text-center font-sans font-bold mb-4 text-gray-900 dark:text-white">
        {blog.title
          .split(" ")
          .map(
            (word: any) =>
              word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
          )
          .join(" ")}
      </h1>
      <div className="mb-6 mx-auto h-[50vh] w-[80vw]">
        {blog.image ? (
          <Image
            src={
              blog.image.startsWith("/")
                ? `http://localhost:4000${blog.image}`
                : blog.image
            }
            alt={blog.title}
            width={800}
            height={300}
            className="rounded-lg h-full w-full object-cover shadow-lg"
          />
        ) : (
          <div className="text-gray-500 dark:text-gray-400">
            No Image Available
          </div>
        )}
      </div>
      <div className="text-lg mb-4  text-gray-800 dark:text-gray-300">
        <span className="font-bold">Author:</span>{" "}
        <span className="text-black/80 font-semibold font-serif">
          {blog.author}
        </span>
        <div className="text-black/80 text-[12px] ">{blog.date_time}</div>
      </div>

      {/* Render Markdown content */}
      <div className="prose dark:prose-dark   ">
        <ReactMarkdown>{blog.content}</ReactMarkdown>
      </div>
    </div>
  );
};

export default BlogDetails;
