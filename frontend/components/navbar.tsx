// components/Navbar.jsx

import Link from 'next/link';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const Navbar = () => {
  return (
    <nav className="sticky top-5 z-[10] mx-auto md:py-1 sm:py-3 ">
      <div className="container sm:flex sm:justify-center sm:items-center mx-auto hidden sm:visible">
        <div className=" bg-cyan-50/35 backdrop-blur-md px-8 py-2 rounded-full">
          <div className='flex justify-center items-center space-x-3'>
            <Link href="/" className='hover:text-slate-700 font-semibold'>
            Home
          </Link>
          <Link href="/about"  className='hover:text-slate-700 font-semibold'>
            About
          </Link>
          <Link href="/blog"  className='hover:text-slate-700 font-semibold'>
            Blog
          </Link>
          <Link href="/contact"  className='hover:text-slate-700 font-semibold'>
            Contact
          </Link>
          </div>
          {/* Mode Toggle */}
        </div>
      </div>
      <div className='sm:hidden fixed top-1 left-2 '>
        <Sheet>
          <SheetTrigger>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 5.25h16.5m-16.5 6h16.5m-16.5 6h16.5"
              />
            </svg>
          </SheetTrigger>
          <SheetContent side="left" className='w-[250px] flex justify-center items-center '>
            <SheetHeader>
              <SheetDescription className=' '>
                 <div className='flex flex-col items-center space-y-6 text-2xl text-black' >
            <Link href="/" className='hover:text-slate-700 font-semibold'>
            Home
          </Link>
          <Link href="/about"  className='hover:text-slate-700 font-semibold'>
            About
          </Link>
          <Link href="/blog"  className='hover:text-slate-700 font-semibold'>
            Blog
          </Link>
          <Link href="/contact"  className='hover:text-slate-700 font-semibold'>
            Contact
          </Link>
          </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;