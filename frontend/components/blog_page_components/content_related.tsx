import Link from 'next/link';

function Content_related() {
  const blogs = [
    {
      id: 1,
      title: 'Understanding React Hooks',
      author: 'John Doe',
      content: 'This article covers the basics of React Hooks...',
      slug: '/blog/understanding-react-hooks'
    },
    {
      id: 2,
      title: 'TailwindCSS Best Practices',
      author: 'Jane Smith',
      content: 'Learn how to use TailwindCSS efficiently in your projects...',
      slug: '/blog/tailwindcss-best-practices'
    },
    {
      id: 3,
      title: 'Next.js for Beginners',
      author: 'Mike Johnson',
      content: 'An introduction to building web applications with Next.js...',
      slug: '/blog/nextjs-for-beginners'
    }
  ];

  return (
    <section className="mx-2 mt-4 rounded-lg p-4 lg:min-h-[500px]">
      <div className="container mx-auto flex flex-wrap lg:flex-nowrap gap-4">
        {/* Left Div - Blog Content */}
        <div className="w-full lg:w-2/3 p-4 bg-white dark:bg-gray-800 border-[1.5px] shadow-md rounded-md">
          <span className="text-2xl font-bold mb-4 text-black dark:text-white">Blog Content </span>
          <p className="text-black dark:text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin, nisi id ullamcorper varius, neque magna cursus nisi, non vestibulum ligula nisl ut erat...
          </p>
          {/* Add the rest of your blog content here */}
        </div>

        {/* Right Div - Related Blogs */}
        <div className="w-full lg:w-1/3 p-4 border-gray-500 bg-gray-100 dark:bg-gray-900 shadow-md rounded-md">
          <h3 className="text-xl font-semibold mb-4 text-center font-[TimesNewRoman] text-black dark:text-white">Related Blogs</h3>
          <div className="flex flex-col space-y-[2px]">
            {blogs.map(blog => (
              <Link href={blog.slug} key={blog.id}>
                <div className="border border-gray-300 dark:border-gray-700 p-4 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer transition transform hover:scale-[101%] hover:shadow-sm hover:border-1 hover:border-black dark:hover:border-white">
                  <h4 className="text-lg font-bold text-black dark:text-white">{blog.title}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">by {blog.author}</p>
                  <p className="mt-2 text-gray-700 dark:text-gray-300">{blog.content}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Content_related;