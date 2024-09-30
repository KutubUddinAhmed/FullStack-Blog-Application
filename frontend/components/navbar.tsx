import React from 'react';
import Link from 'next/link';

function Navbar() {
  return (
    <nav className="bg-white/30 sticky top-7 backdrop-blur p-4 mx-[500px] rounded-full z-[100]   ">
      <div className="container mx-auto flex justify-center items-center">
        <div className="hidden md:flex space-x-4 text-black font-semibold">
          <Link href="/" passHref className="hover:text-gray-600">
            Home
          </Link>
          <Link href="/blog" passHref className="hover:text-gray-500">
             Blog
          </Link>
          <Link href="/about" passHref className=" hover:text-gray-500">
           About
          </Link>
          <Link href="/contact" passHref className="hover:text-gray-500">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
