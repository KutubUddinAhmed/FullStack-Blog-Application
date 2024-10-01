// components/Navbar.jsx
"use client";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";

import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const { setTheme } = useTheme();
  return (
    <nav className="sticky top-2 z-[10] mx-auto  ">
      <div className="container sm:flex sm:justify-center sm:items-center mx-auto hidden sm:visible">
        <div
          className=" bg-cyan-50/35 backdrop-blur-md px-8 py-2 rounded-full
        flex space-x-3 items-center"
        >
          <div className="flex justify-center items-center space-x-3">
            <Link href="/" className="hover:text-slate-700 font-semibold dark:text-black">
              Home
            </Link>
            <Link href="/about" className="hover:text-slate-700 font-semibold dark:text-black">
              About
            </Link>
            <Link href="/blog" className="hover:text-slate-700 font-semibold dark:text-black">
              Blog
            </Link>
            <Link
              href="/contact"
              className="hover:text-slate-700 font-semibold dark:text-black"
            >
              Contact
            </Link>
          </div>
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="bg-white/50 dark:hover:bg-white/60 dark:hover:text-black">
                  <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 " />
                  <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-black dark:text-black" />

                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>
                  Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                  Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                  System
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          {/* Mode Toggle */}
        </div>
      </div>
      <div className="sm:hidden fixed top-1 left-2 flex items-center space-x-3 ">
        <Sheet>
          <SheetTrigger>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-black dark:text-black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 5.25h16.5m-16.5 6h16.5m-16.5 6h16.5"
              />
            </svg>
          </SheetTrigger>
          <SheetContent
            side="left"
            className="w-[250px] flex justify-center items-center bg-white"
          >
            <SheetHeader>
              <SheetDescription className=" ">
                <div className="flex flex-col items-center space-y-6 text-2xl text-black">
                  <Link href="/" className="hover:text-slate-700 font-semibold">
                    Home
                  </Link>
                  <Link
                    href="/about"
                    className="hover:text-slate-700 font-semibold"
                  >
                    About
                  </Link>
                  <Link
                    href="/blog"
                    className="hover:text-slate-700 font-semibold"
                  >
                    Blog
                  </Link>
                  <Link
                    href="/contact"
                    className="hover:text-slate-700 font-semibold"
                  >
                    Contact
                  </Link>
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="bg-white/50 dark:bg-black"
              >
                <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 " />
                <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 " />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
